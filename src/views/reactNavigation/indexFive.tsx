import React from 'react';
import {Text, View, Pressable, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const ALL_NTF = [
  {title: 'Kitty'},
  {
    title: '旺财',
    describe: '旺财旺财旺财~',
    image: require('./images/dog.webp'),
  },
  {title: 'Simba'},
];

// 导航配置 options

function Discover({navigation}: any) {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('Detail', ALL_NTF[1]);
      }}>
      <Image style={{width: 100, height: 100}} source={ALL_NTF[1].image} />
    </Pressable>
  );
}

function Detail({navigation}: any) {
  // React.useEffect() 异步副作用回调，执行 setOptions 会导致闪屏，不推荐使用。

  // 页面初始化时，同步设置
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      fullScreenGestureEnabled: true,
    });
  }, [navigation]);

  // 点击按钮后，异步设置
  const handlePress = () => {
    // headerShown: false,
    // fullScreenGestureEnabled: true,
    // 需要挑有上面title的时候才可以
    navigation.setOptions({
      title: '新标题',
    });
  };

  return (
    <View style={{marginTop: 110}}>
      <Text onPress={handlePress}>设置新标题</Text>
    </View>
  );
}
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Discover">
        <Stack.Screen name="Discover" component={Discover} />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            headerShown: false,
            fullScreenGestureEnabled: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
