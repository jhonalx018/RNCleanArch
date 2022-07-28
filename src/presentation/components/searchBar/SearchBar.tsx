import React from 'react';
import {Animated} from 'react-native';
import useDebounce from '@hook/UseDebounceHook';

import {FilterTextInput, StyledImageBackground, HEADER_HEIGHT} from './style';

type TSearchBar = {
  placeholder: string;
  animatedValue: any;
  onTextChange: Function;
};

export default ({placeholder, animatedValue, onTextChange}: TSearchBar) => {
  const changeDebounce = useDebounce<string>(text => {
    onTextChange(text);
  }, 500);

  const headerHeight = animatedValue.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [HEADER_HEIGHT, 120],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      style={{
        height: headerHeight,
      }}>
      <StyledImageBackground>
        <FilterTextInput
          placeholder={placeholder}
          onChangeText={changeDebounce}
        />
      </StyledImageBackground>
    </Animated.View>
  );
};
