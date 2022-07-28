import styled from 'styled-components/native';
import {Image} from 'react-native';

export const IconProfile = styled(Image).attrs({
  source: require('@assets/defaultImages/icnTabProfile.png'),
})`
  width: 25;
  height: 25;
  tint-color: #6a20ce;
`;

export const IconDiscover = styled(Image).attrs({
  source: require('@assets/defaultImages/icnTabDiscover.png'),
})`
  width: 25;
  height: 25;
  tint-color: #6a20ce;
`;
