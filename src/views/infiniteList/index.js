import {Text, SafeAreaView, StyleSheet, Pressable,View} from 'react-native';

import AlexScrollView from './scrollView';
import AlexFlatList from './flatList';
import AlexRecyclerListView from './recyclerListView';
// 1  ScrollView：渲染所有内容的滚动组件

// 2  FlatList：按需渲染的列表组件

// 3 RecyclerListView：可复用的列表组件

// 10 个 item 就能填满整个屏幕，渲染很快
// 1000 个 item 相当于 100+ 个屏幕的高度，渲染很慢

{
  /* <AlexScrollView></AlexScrollView> */
}
{
  /* <AlexFlatList></AlexFlatList> */
}
export default function InfiniteList() {
  return (
    <View style={{flex: 1}}>
      <AlexRecyclerListView></AlexRecyclerListView>{' '}
    </View>
  );
}
