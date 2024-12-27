import React, {ErrorInfo} from 'react';
import {Text, View} from 'react-native';
import MoniterSDK from './MonitorSDK';
const moniter = new MoniterSDK();

console.log(moniter);

export default class MonitorExample extends React.Component<
  {},
  {hasError: boolean; renderError: boolean}
> {
  render() {
    return (
      <View>
        <Text>嘿嘿 我进行测试</Text>
      </View>
    );
  }
}
