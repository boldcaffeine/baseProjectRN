import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {
  RecyclerListView,
  DataProvider,
  BaseLayoutProvider,
} from 'recyclerlistview';
import {WaterfallLayoutProvider} from '../../components/RecyclerListView/WaterfallLayoutProvider';
import {useInfiniteQuery} from 'react-query';
import {
  queryRecyclerAnimals,
  RecyclerNFTs,
  RecyclerNFT,
  recyclerQueryOption,
} from '../WaterFallCard';
import {animalsUrl} from '../../api/homeAPI';
import RowRenderer from './RowRenderer';

// RLV 的模板代码

function List() {
  const {
    status,
    data: recyclerNFTs,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery<RecyclerNFTs>(
    animalsUrl,
    queryRecyclerAnimals,
    recyclerQueryOption,
  );

  // 格式处理
  const nfts = recyclerNFTs?.pages.reduce<RecyclerNFT[]>(
    (accumulator, page) => {
      return accumulator.concat(
        page.items.reduce<RecyclerNFT[]>((all, group) => all.concat(group), []),
      );
    },
    [],
  );

  // 创建数据提供者
  let dp = new DataProvider((r1, r2) => r1.id !== r2.id);
  // 都请求回来时才渲染
  if (nfts) {
    dp = dp.cloneWithRows([...nfts]);
  }
  // 布局提供者
  // @ts-ignore
  const layoutProvider: BaseLayoutProvider = new WaterfallLayoutProvider(
    index => dp.getDataForIndex(index).type,
    (type, dim, index) => {
      dim.width = dp.getDataForIndex(index).width;
      dim.height = dp.getDataForIndex(index).height;
    },
  );

  const Footer = () => (
    <Text style={styles.footer}>
      {isFetchingNextPage
        ? '加载中...'
        : hasNextPage
        ? '加载中...'
        : '没有数据了'}
    </Text>
  );

  if (status === 'error') {
    return <Text>你的服务跑丢了</Text>;
  }

  if (status === 'loading') {
    return <Text>正在加载中...</Text>;
  }

  return (
    <View style={styles.container}>
      {dp.getSize() > 0 ? (
        <RecyclerListView
          onEndReached={() =>
            status === 'success' && !isFetchingNextPage && fetchNextPage()
          }
          dataProvider={dp}
          layoutProvider={layoutProvider}
          rowRenderer={RowRenderer}
          renderFooter={Footer}
        />
      ) : null}
    </View>
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
  container: {flex: 1, backgroundColor: '#FAFAFA'},
  liked: {fontSize: 12},
  footer: {height: 50, textAlign: 'center'},
});

export default List;
