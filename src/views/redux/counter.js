import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { increment, decrement } from '../../store/actions/counterActions';

const Counter = ({ count, increment, decrement }) => {
  return (
    <View style={{marginTop:100}}>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={increment} />
      <Button title="Decrement" onPress={decrement} />
    </View>
  );
};

// mapStateToProps：将 Redux state 映射到组件的 props
const mapStateToProps = (state) => ({
  count: state.counter.count,
});

// mapDispatchToProps：将 Redux actions 映射到组件的 props
const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
