import {Text, View, Pressable, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// 函数组件默认是没有 navigation 对象的
// 当函数组件通过 Stack.Screen 生成页面时，才会有 navigation 对象
// 接下来的第三步就是，携带自定义参数跳转和接收自定义参数。
// 自定义参数 params


// params：它是开发者自定义参数，通常用来渲染页面主体的数据，它是挂在 route 上的对象；

// options：它是导航相关的配置属性，包括手机顶部的状态栏、页面的标题栏、导航相关手势等等。


const ALL_NTF = [
  {
    /* ... */
  },
  {
    describe: '旺财旺财旺财~',
    image: require('./images/dog.webp'),
  },
  {
    /* ... */
  },
];

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

function Detail({route}: any) {
  const {describe, image} = route.params;
  return (
    <View>
      <Text>{describe}</Text>
    </View>
  );
}
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Discover">
        <Stack.Screen name="Discover" component={Discover} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
