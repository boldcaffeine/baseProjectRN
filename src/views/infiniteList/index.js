import {
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Pressable,
  FlatList,
} from 'react-native';

// 1  ScrollView：渲染所有内容的滚动组件

// 2  FlatList：按需渲染的列表组件

// 3 RecyclerListView：可复用的列表组件


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
  itemWrapper: {
    height: 60,
    borderWidth: 1,
  },
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

const NUM_ITEMS = 30;

const makeContent = (nItems, styles) => {
  return Array(nItems)
    .fill(1)
    .map((_, i) => (
      <Pressable key={i} style={styles}>
        <Text>{'Item ' + i}</Text>
      </Pressable>
    ));
};

export default function InfiniteList() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>{makeContent(NUM_ITEMS, styles.itemWrapper)}</ScrollView>
      <FlatList
        data={flatListData} // 数据源
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>} // 渲染每个项
        keyExtractor={item => item.key} // 提供每个项的唯一标识符
      />
    </SafeAreaView>
  );
}
