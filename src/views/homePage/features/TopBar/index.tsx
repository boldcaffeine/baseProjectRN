import React, {useState} from 'react';

import {View, StyleSheet} from 'react-native';

import CateTitle, {HandleCatePress} from './CateTitle';

const CATES = {
  home: {
    name: '首页',
    id: 'HOME',
  },
  follow: {
    name: '关注',
    id: 'FOLLOW',
  },
};

function TopBar() {
  const [activeCate, setActiveCate] = useState(CATES.home.id);
  const handlePress: HandleCatePress = cateId => setActiveCate(cateId);
  return (
    <View style={styles.box}>
      <CateTitle
        active={activeCate === CATES.home.id}
        handlePress={handlePress}
        cateId={CATES.home.id}>
        {CATES.home.name}
      </CateTitle>
      <CateTitle
        active={activeCate === CATES.follow.id}
        handlePress={handlePress}
        cateId={CATES.follow.id}>
        {CATES.follow.name}
      </CateTitle>
    </View>
  );
}
const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default TopBar;
