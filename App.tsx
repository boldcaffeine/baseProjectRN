/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

import Product from './src/views/fruitList';
import StyleList from './src/views/styleList';
import FlexList from './src/views/flexList';
import StateList from './src/views/stateList';
import ImageList from './src/views/imageList';
import ButtonList from './src/views/buttonList';
import InputList from './src/views/inputList';
import AlexReanimated from './src/views/reanimated/gesture.tsx';

// import AlexReactNavigation from './src/views/reactNavigation/index.tsx';
// import AlexReactNavigation from './src/views/reactNavigation/indexTwo.tsx';
// import AlexReactNavigation from './src/views/reactNavigation/indexThree.tsx';
// import AlexReactNavigation from './src/views/reactNavigation/indexFour.tsx';
// import AlexReactNavigation from './src/views/reactNavigation/indexFive.tsx';
// import AlexReactNavigation from './src/views/reactNavigation/indexSix.tsx';
import AlexRedux from './src/views/redux/index.js';
import AlexPerformanceMonitoring from './src/views/performanceMonitoring/index.tsx';


// import InfiniteList from './src/views/infiniteList';
// import HomePage from './src/views/homePage';
function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

 function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };


  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {/* <InfiniteList></InfiniteList> */}
      {/* <HomePage></HomePage> */}

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <Product></Product>
        <StyleList></StyleList>
        <FlexList></FlexList>
        <StateList></StateList>
        <ImageList></ImageList>
        <ButtonList></ButtonList>
        <InputList></InputList>
        <AlexReanimated></AlexReanimated>

        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

// export default AlexReactNavigation;

// export default AlexRedux
export default AlexPerformanceMonitoring

// export default App
