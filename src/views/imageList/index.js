import {View, Image} from 'react-native';

// React Native 组件样式都有哪些？ 组件样式 = 通用样式 + “私有”样式
// 方案一：正确
const dianxinIcon = require('./q.jpeg');

export default function StyleList() {
  return (
    <View>
      <Image style={{width: '100%', height: 400}} source={dianxinIcon} />
      <View>
        <Image
          source={{
            uri: 'https://oss.onemad.com/performad/local/20240620/c29e1be2692dead4111a6c4646c6ff53.jpg',
          }}
          style={{width: '100%', height: 400}}
        />
      </View>
      <View>
        <Image
          source={{
            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
          }}
          style={{width: 100, height: 100}}
        />
      </View>
    </View>
  );
}
