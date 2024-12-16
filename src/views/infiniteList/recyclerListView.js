import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';

const {width} = Dimensions.get('window');

export default function List() {
  // 创建数据提供者
  const dataProvider = new DataProvider((r1, r2) => r1.id !== r2.id);

  // 示例数据
  const data = Array.from({length: 1000}, (_, index) => ({
    id: index.toString(),
    title: `Item ${index + 1}`,
  }));

  // 布局提供者
  const layoutProvider = new LayoutProvider(
    () => 0, // 返回一个固定的布局类型 0
    (type, dim) => {
      dim.width = width; // 适应屏幕宽度
      dim.height = 50; // 设置每个 item 的高度
    },
  );

  // 渲染每个 item 的函数
  const rowRenderer = (type, data) => {
    return (
      <View style={styles.item}>
        <Text style={styles.text}>{data.title}</Text>
      </View>
    );
  };

  return (
    <RecyclerListView
      style={{flex: 1}}
      dataProvider={dataProvider.cloneWithRows(data)} // 使用 cloneWithRows 来加载数据
      layoutProvider={layoutProvider}
      rowRenderer={rowRenderer} // 渲染函数
    />
  );
}

const styles = StyleSheet.create({
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
  },
  text: {
    fontSize: 16,
    width: 375,
  },
});
