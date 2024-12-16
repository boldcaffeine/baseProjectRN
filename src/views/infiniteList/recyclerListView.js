import {Text, StyleSheet, FlatList, View} from 'react-native';

const flatListData = [
  {key: 'Devin', code: 'ID_1'},
  {key: 'Dan', code: 'ID_2'},
  {key: 'Dominic', code: 'ID_3'},
  {key: 'Jackson', code: 'ID_4'},
  {key: 'James', code: 'ID_5'},
  {key: 'Joel', code: 'ID_6'},
  {key: 'John', code: 'ID_7'},
  {key: 'Jillian', code: 'ID_8'},
  {key: 'Jimmy', code: 'ID_9'},
  {key: 'Julie', code: 'ID_10'},
  {key: 'Devin', code: 'ID_11'},
  {key: 'Dan', code: 'ID_12'},
  {key: 'Dominic', code: 'ID_13'},
  {key: 'Jackson', code: 'ID_14'},
  {key: 'James', code: 'ID_15'},
  {key: 'Joel', code: 'ID_16'},
  {key: 'John', code: 'ID_17'},
  {key: 'Jillian', code: 'ID_18'},
  {key: 'Jimmy', code: 'ID_19'},
  {key: 'Julie', code: 'ID_20'},
  {key: 'Devin', code: 'ID_21'},
  {key: 'Dan', code: 'ID_22'},
  {key: 'Dominic', code: 'ID_23'},
  {key: 'Jackson', code: 'ID_24'},
  {key: 'James', code: 'ID_25'},
  {key: 'Joel', code: 'ID_26'},
  {key: 'John', code: 'ID_27'},
  {key: 'Jillian', code: 'ID_28'},
  {key: 'Jimmy', code: 'ID_29'},
  {key: 'Julie', code: 'ID_30'},
  {key: 'Devin', code: 'ID_31'},
  {key: 'Dan', code: 'ID_32'},
  {key: 'Dominic', code: 'ID_33'},
  {key: 'Jackson', code: 'ID_34'},
  {key: 'James', code: 'ID_35'},
  {key: 'Joel', code: 'ID_36'},
  {key: 'John', code: 'ID_37'},
  {key: 'Jillian', code: 'ID_38'},
  {key: 'Jimmy', code: 'ID_39'},
  {key: 'Julie', code: 'ID_40'},
  {key: 'Devin', code: 'ID_41'},
  {key: 'Dan', code: 'ID_42'},
  {key: 'Dominic', code: 'ID_43'},
  {key: 'Jackson', code: 'ID_44'},
  {key: 'James', code: 'ID_45'},
  {key: 'Joel', code: 'ID_46'},
  {key: 'John', code: 'ID_47'},
  {key: 'Jillian', code: 'ID_48'},
  {key: 'Jimmy', code: 'ID_49'},
  {key: 'Julie', code: 'ID_50'},
  {key: 'Devin', code: 'ID_51'},
  {key: 'Dan', code: 'ID_52'},
  {key: 'Dominic', code: 'ID_53'},
  {key: 'Jackson', code: 'ID_54'},
  {key: 'James', code: 'ID_55'},
  {key: 'Joel', code: 'ID_56'},
  {key: 'John', code: 'ID_57'},
  {key: 'Jillian', code: 'ID_58'},
  {key: 'Jimmy', code: 'ID_59'},
  {key: 'Julie', code: 'ID_60'},
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
        keyExtractor={item => item.code} // 提供每个项的唯一标识符
      />
    </View>
  );
}
