

import React from 'react';
import {StyleSheet} from 'react-native';
import {
  PanGestureHandler,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

const DraggableBox = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

 

  const onGestureEvent = (event: any) => {
    translateX.value = event.translationX;
    translateY.value = event.translationY;
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: translateX.value}, {translateY: translateY.value}],
  }));

  return (
    <GestureHandlerRootView>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'tomato',
    borderRadius: 10,
  },
});

export default DraggableBox;
