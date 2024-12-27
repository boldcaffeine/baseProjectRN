import {View, Text, Pressable, SafeAreaView} from 'react-native';
import uuid from 'react-native-uuid';
import {MMKV} from 'react-native-mmkv';
import DeviceInfo from 'react-native-device-info';
// 用户唯一标示

export default function App() {
  let userId = '';
  const storage = new MMKV();
  const hasUserId = storage.contains('userId');
  function handlePress() {
    if (hasUserId) {
      userId = storage.getString('userId');
      console.log('已经过生成过uuid', userId);
      // API 提供了获取的能力，但根据 《网络数据安全管理条例（征求意见稿）》 是不能上报的，所以推荐使用 uuid 代替。

      const androidIdPromise = DeviceInfo.getAndroidId();

      // 将设备信息收集到一个 deviceInfo 对象中，统一上报。
      const deviceInfo = {};
      deviceInfo.systemName = DeviceInfo.getSystemName(); // iOS: "iOS" Android: "Android"
      deviceInfo.systemVersion = DeviceInfo.getSystemVersion(); // iOS: "11.0" Android: "7.1.1"
      deviceInfo.brand = DeviceInfo.getBrand(); // iOS: "Apple" Android: "xiaomi"
      deviceInfo.appName = DeviceInfo.getApplicationName(); // AwesomeApp
      console.log(deviceInfo);
    } else {
      // 用户第一次打开 App
      userId = uuid.v4();
      storage.set('userId', userId);
      console.log('用户第一次打开 App 生成uuid', userId);
    }
  }
  function handlePressIn() {
    console.log('handlePressIn');
  }

  return (
    <SafeAreaView>
      <View>
        <Pressable
          onPress={handlePress}
          onPressIn={handlePressIn}
          style={baseStyle}>
          <Text>按钮</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const baseStyle = {
  margin: 10,
  borderWidth: 10,
  borderColor: 'red',
  padding: 10,
  width: 100,
  height: 100,
  backgroundColor: 'orange',
};
