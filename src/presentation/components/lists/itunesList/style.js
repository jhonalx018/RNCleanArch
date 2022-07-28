import styled from 'styled-components/native';
import {ImageBackground} from 'react-native';

export const ContentScreen = styled.View`
  width: 100%;
`;

export const ContentItem = styled.View`
  flex-direction: row;
  padding-bottom: 10;
  width: 100%;
  align-items: center;
  padding-left: 10;
  padding-right: 50;
  padding-vertical: 10;
`;

export const ContentCard = styled.View`
  border-radius: 10;
  margin-vertical: 7;
  shadow-color: #17217a;
  shadow-opacity: 0.29;
  border-bottom-width: 1;
  border-right-width: 1;
  border-left-width: 1;
  border-color: #f6f6f6;
  background-color: #fff;
  shadow-radius: 5;
  width: 98%;
  align-self: center;
  display: ${({isFiltered}) => (isFiltered ? 'none' : 'flex')};
`;

export const StyledImageBackground = styled(ImageBackground).attrs({
  resizeMode: 'cover',
  progressiveRenderingEnabled: true,
})`
  width: 100%;
  height: 70;
  overflow: hidden;
  border-top-right-radius: 10;
  border-top-left-radius: 10;
`;

export const LogoImage = styled(ImageBackground).attrs({
  resizeMode: 'cover',
})`
  width: 65;
  height: 65;
  border-radius: 100;
  overflow: hidden;
`;

export const TextTitleItem = styled.Text`
  font-size: 12;
  margin-left: 10;
  text-transform: uppercase;
  margin-right: 30;
`;
