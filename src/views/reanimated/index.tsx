import React, {useState} from 'react';
import {View, Text} from 'react-native';

// import Animated, {
//   useSharedValue,
//   useAnimatedStyle,
// } from 'react-native-reanimated';

function App() {
  const [randomWidth, setRandomWidth] = useState(10);
  // const reanimatedRandomWidth = useSharedValue(10);
  // State 示例代码
  const style = {
    width: randomWidth,
  };


  
  // reanimated正确示范
  // const styleReanimated = useAnimatedStyle(() => {
  //   return {
  //     width: reanimatedRandomWidth.value,
  //   };
  // });

  return (
    <View>
      <View>
        <Text>reanimated111</Text>
      </View>

      <View style={[{width: 100}, style]} />


    </View>
  );
}

export default App;
