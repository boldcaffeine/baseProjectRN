import {Text, View} from 'react-native';


// React Native 组件样式都有哪些？ 组件样式 = 通用样式 + “私有”样式

export default function StyleList() {
  return (
    <View style={{flexDirection: 'row', marginTop: 5}}>
      <Text style={{color: 'red'}}> 文字颜色</Text>
      <Text style={{borderColor: 'green', borderWidth: 1, borderRadius: 5}}>
        圆角边框
      </Text>
    </View>
  );
}
