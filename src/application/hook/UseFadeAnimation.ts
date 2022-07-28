import {useRef, useEffect} from 'react';
import {Animated} from 'react-native';

/**
 * @param  {boolean} isFadeIn
 * @param  {} FADE_ANIMATION_DURATION=700
 */
export default function (isFadeIn: boolean, FADE_ANIMATION_DURATION = 700) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: Number(isFadeIn),
      duration: FADE_ANIMATION_DURATION,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, isFadeIn, FADE_ANIMATION_DURATION]);

  return fadeAnim;
}
