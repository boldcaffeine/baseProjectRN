// import * as Sentry from '@sentry/react-native';
import React, {ErrorInfo} from 'react';
import {Text, View} from 'react-native';
import MoniterSDK from './MonitorSDK';

const moniter = new MoniterSDK();

export default class MonitorExample extends React.Component<
  {},
  {hasError: boolean; renderError: boolean}
> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {hasError: false, renderError: false};
  }

  // 渲染备用 UI
  static getDerivedStateFromError() {
    return {hasError: true};
  }

  // 打印错误信息
  componentDidCatch(error: Error, info: ErrorInfo) {
    moniter.logComponentStack(error, info);
  }

  render() {
    if (this.state.hasError) return <Text>JSX 报错了</Text>;

    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>SDK测试</Text>
        {/* <Text>herems: {(!!(global.HermesInternal as any)).toString()}</Text> */}
        <View>
          <Text
            onPress={() => {
              throw new Error('My first Sentry error!2222');
            }}>
            点击我测试js报错
          </Text>
        </View>
        <View>
          <Text
            onPress={() => {
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  reject(new Error('抛出 Promise 报错'));
                }, 0);
              });
            }}>
            点击我测试 throw promise error
          </Text>
        </View>
        <View>
          <Text
            onPress={() => {
              this.setState({renderError: true});
            }}>
            点击我测试 throw JSX error
          </Text>
          {this.state.renderError && <div></div>}
        </View>
      </View>
    );
  }
}
