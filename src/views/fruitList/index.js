import {
    Text,
    View,
  } from 'react-native';
  
export default function fruitList({product = {name: '苹果', price: '1元'}}) {
  return (
    <View style={{flexDirection: 'row', marginTop: 5}}>
      <Text style={{flex: 1}}>{product.name}</Text>
      <Text style={{width: 50}}>{product.price}</Text>
    </View>
  );
}
