import {Text, StyleSheet, FlatList,View} from 'react-native';

const flatListData = [
  {key: 'Devin'},
  {key: 'Dan'},
  {key: 'Dominic'},
  {key: 'Jackson'},
  {key: 'James'},
  {key: 'Joel'},
  {key: 'John'},
  {key: 'Jillian'},
  {key: 'Jimmy'},
  {key: 'Julie'},
];

// 10 个 item 就能填满整个屏幕，渲染很快
// 1000 个 item 相当于 100+ 个屏幕的高度，渲染很慢

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  item: {
    padding: 20,
    fontSize: 18,
    height: 44,
  },
});

export default function List() {
  return (
    <View>
      <FlatList
        data={flatListData} // 数据源
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>} // 渲染每个项
        keyExtractor={item => item.key} // 提供每个项的唯一标识符
      />
    </View>
  );
}
