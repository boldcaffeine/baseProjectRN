import {Text, View, Image, StyleSheet} from 'react-native';

// React Native 的 Flex 布局有哪些特点？Flex：跨平台、高性能、易上手
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    borderWidth: 1,
  },
  texts: {
    fontSize: 18,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
});
export default function StyleList() {
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 60,
      borderWidth: 1,
    },
    texts: {
      fontSize: 18,
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
  });
  return (
    <View>
      {/* 第一个例子，从上往下排列布局 */}

      <View style={{display: 'flex', flexDirection: 'column'}}>
        <View style={{height: 50, backgroundColor: 'powderblue'}} />
        <View style={{height: 50, backgroundColor: 'skyblue'}} />
        <View style={{height: 50, backgroundColor: 'steelblue'}} />
      </View>
      {/* 第二个例子，左图右文布局 */}

      <View style={{flexDirection: 'row'}}>
        <Image
          style={{width: 100, height: 100}}
          source={{
            uri: 'https://up.zhuoku.org/22/a4/60/50/fc3bd0b4e656911fccdde4383637c1cd.jpg',
          }}
        />
        <Text style={{flex: 1, fontSize: 18}}>我是文字</Text>
      </View>
      {/* 第三个例子，文字居中布局 */}
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          // 高度确定
          height: 60,
          borderWidth: 1,
        }}>
        <Text
          style={{
            fontSize: 18,
            // 文字默认内边距，会导致垂直居中偏下
            includeFontPadding: false,
            // 文字默认基于基线对齐，会导致垂直居中偏下
            textAlignVertical: 'center',
          }}>
          我是文字1
        </Text>
      </View>

      {/* React Native 样式代码如何管理？

        StyleSheet 来写样式，而不是内联的方式。使用样式表 StyleSheet 有三个好处

        元素结构和样式分离，可维护性更好；

        样式对象可以复用，能减少重复代码；

        样式对象只创建一次，也减少性能的损耗。
        */}

      <View style={styles.container}>
        <Text style={styles.texts}>我是文字1</Text>
        <Text style={styles.texts}>我是文字2</Text>
      </View>
    </View>
  );
}
