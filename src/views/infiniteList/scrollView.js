import {
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Pressable,
} from 'react-native';

// 10 个 item 就能填满整个屏幕，渲染很快
// 1000 个 item 相当于 100+ 个屏幕的高度，渲染很慢

const styles = StyleSheet.create({
  itemWrapper: {
    height: 60,
    borderWidth: 1,
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
    </SafeAreaView>
  );
}
