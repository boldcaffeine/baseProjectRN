import {View, Text, Pressable} from 'react-native';
const baseStyle = {
  margin: 10,
  borderWidth: 10,
  borderColor: 'red',
  padding: 10,
  width: 100,
  height: 100,
  backgroundColor: 'orange',
};
export default function ButtonList() {
  function handlePress() {
    console.log('你点击我的');
  }
  function handlePressIn() {
    console.log('handlePressIn');
  }
  function handlePressOut() {
    console.log('handlePressOut');
  }
  return (
    <View>
      <Pressable
        onPress={handlePress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={baseStyle}>
        <Text>按钮</Text>
      </Pressable>
    </View>
  );
}
