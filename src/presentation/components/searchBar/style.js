import styled from 'styled-components/native';
import {ImageBackground} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const ITUNES_IMAGE = require('@assets/defaultImages/itunes_image.jpeg');

export const HEADER_HEIGHT = 200;

export const FilterTextInput = styled(TextInput)`
  height: 45;
  padding-horizontal: 10;
  border-radius: 10;
  background-color: #fff;
  width: 95%;
  opacity: 0.6;
`;

export const StyledImageBackground = styled(ImageBackground).attrs({
  resizeMode: 'cover',
  source: ITUNES_IMAGE,
})`
  width: 100%;
  height: 100%;
  overflow: hidden;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 15;
`;
