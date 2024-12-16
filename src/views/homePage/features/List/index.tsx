import React from 'react';
import {

  View,
  Text,
  StyleSheet,

} from 'react-native';


// RLV 的模板代码

function List() {
  return (
    <View style={styles.container}>
       <Text>3333</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FAFAFA'},
  liked: {fontSize: 12},
  footer: {height: 50},
});

export default List;
