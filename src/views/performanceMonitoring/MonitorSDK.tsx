import uuid from 'react-native-uuid';
import {MMKV} from 'react-native-mmkv';
import DeviceInfo from 'react-native-device-info';
import React, {ErrorInfo} from 'react';

interface DeviceInfoType {
  systemName: string;
  systemVersion: string;
  brand: string;
  appName: string;
  appVersion: string;
}

export default class MonitorSDK {
  userId: string;
  deviceInfo: DeviceInfoType;
  constructor() {
    this.userId = this.getUserId();
    this.deviceInfo = this.getDeviceInfo();
  }
  getUserId(): string {
    let userId = '';
    const storage = new MMKV();
    const hasUserId = storage.contains('userId');
    if (hasUserId) {
      userId = storage.getString('userId') ?? 'default userId';
    } else {
      // 用户第一次打开 App
      userId = uuid.v4() as string;
      storage.set('userId', userId);
    }

    return userId;
  }
  getDeviceInfo(): DeviceInfoType {
    return {
      systemName: DeviceInfo.getSystemName(), // iOS: "iOS" Android: "Android"
      systemVersion: DeviceInfo.getSystemVersion(), // iOS: "11.0" Android: "7.1.1"
      brand: DeviceInfo.getBrand(), // iOS: "Apple" Android: "xiaomi"
      appName: DeviceInfo.getApplicationName(), // AwesomeApp
      appVersion: DeviceInfo.getVersion(), // iOS: "1.0" Android: "1.0"
    };
  }
  attachUnhandledRejectionHandler(): void {
    const rejectionTrackingOptions = {
      allRejections: true,
      onUnhandled: (id: string, error: Error) => {
        console.log(
          `Possible Unhandled Promise Rejection: ${JSON.stringify(
            {
              userId: this.userId,
              deviceInfo: this.deviceInfo,
              id,
              error,
            },
            null,
            2,
          )}`,
        );
      },
      onHandled: (id: string) => {
        console.log(
          `Promise Rejection Handled: ${JSON.stringify(
            {
              userId: this.userId,
              deviceInfo: this.deviceInfo,
              id,
            },
            null,
            2,
          )}`,
        );
      },
    };

    // @ts-ignore
    if (global?.HermesInternal?.hasPromise?.()) {
      console.log('HermesInternal?.hasPromise');
      // @ts-ignore
      global.HermesInternal?.enablePromiseRejectionTracker?.(
        rejectionTrackingOptions,
      );
    } else {
      const tracking: {
        disable: () => void;
        enable: (arg: unknown) => void;
      } = require('promise/setimmediate/rejection-tracking');
      tracking.disable();
      tracking.enable(rejectionTrackingOptions);
    }
  }
  attachErrorHandler(): void {
    const defaultHandler =
      ErrorUtils.getGlobalHandler && ErrorUtils.getGlobalHandler();

    ErrorUtils.setGlobalHandler((error: Error, isFatal?: boolean) => {
      console.warn(
        `Global Error Handled: ${JSON.stringify(
          {
            userId: this.userId,
            deviceInfo: this.deviceInfo,
            isFatal,
            errorName: error.name,
            errorMessage: error.message,
            // @ts-ignore
            componentStack: error.componentStack,
            errorStack: error.stack,
          },
          null,
          2,
        )}`,
      );
      defaultHandler(error, isFatal);
    });
  }
  logComponentStack(error: Error, info: ErrorInfo): void {
    console.log(
      `Component Stack: ${JSON.stringify(
        {
          userId: this.userId,
          deviceInfo: this.deviceInfo,
          error,
          info,
        },
        null,
        2,
      )}`,
    );
  }
}
