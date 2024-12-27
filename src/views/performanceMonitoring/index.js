import {View, Text, Pressable, SafeAreaView} from 'react-native';
import uuid from 'react-native-uuid';
import {MMKV} from 'react-native-mmkv';

// 用户唯一标示

export default function App() {
  let userId = '';
  const storage = new MMKV();
  const hasUserId = storage.contains('userId');
  function handlePress() {
    if (hasUserId) {
      userId = storage.getString('userId');
      console.log('已经过生成过uuid', userId);
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
