
import {Text, View, Button} from 'react-native';


import React, {useState, useEffect} from 'react';

// React Native 组件样式都有哪些？ 组件样式 = 通用样式 + “私有”样式

function Count() {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>{count}</Text>
      <Button title="+" onPress={() => setCount(count + 1)} />
      <Button
        title="-"
        onPress={() => setCount(count - 1 >= 0 ? count - 1 : 0)}
      />
    </View>
  );
}
export default function StateList() {
  const requestStatus = {
    IDLE: 'IDLE',
    PENDING: 'PENDING',
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR',
  };
  const [testStatus, setTestStatus] = useState('HELLO WORLD');
  useEffect(() => {
    setTestStatus('你好 世界');
    return () => {};
  }, []);
  return (
    <View>
      <Text>{requestStatus.IDLE}</Text>
      <Text>{requestStatus.PENDING}</Text>
      <Text>{testStatus}</Text>
      <Count></Count>
    </View>
  );
}
