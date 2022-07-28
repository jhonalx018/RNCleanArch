import styled from 'styled-components/native';
import {Animated, ActivityIndicator} from 'react-native';

export const ContentScreen = styled(Animated.View)`
  flex: 1;
  background-color: #fff;
`;

export const ContentCentered = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const BussinesDefaultText = styled.Text`
  font-size: 20;
`;

export const DefaultActivtyIndicator = styled(ActivityIndicator).attrs({
  size: 'large',
  color: '#6a20ce',
});
