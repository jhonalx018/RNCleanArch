import React, {useRef, useContext} from 'react';
import {Animated} from 'react-native';

import {LocalizationContext} from '@internationalization/LocalizationProvider';
import SearchBar from '@components/searchBar/SearchBar';
import {usePagination} from '@hook/UsePagination';
import {useSearchType, ItunesData} from '@customTypes/ItunesTypes';

import {
  ContentScreen,
  ContentItem,
  TextTitleItem,
  ContentCard,
  LogoImage,
} from './style';

const RenderItem = (item: ItunesData) => {
  return (
    <ContentCard>
      <ContentItem>
        <LogoImage source={{uri: item.artworkUrl100}} />
        <TextTitleItem>{item.trackName}</TextTitleItem>
      </ContentItem>
    </ContentCard>
  );
};

/**
 * Render a list
 */
const ItunesList = (itunesSearch: useSearchType) => {
  const offsetRef = useRef(new Animated.Value(0)).current;
  const flatListRef: any = useRef(null);
  const {nextPage, paginationList} = usePagination<ItunesData>(
    itunesSearch.data,
    20,
  );

  const {
    translations: {
      SCREENS: {ITUNES_SCREEN},
    },
  } = useContext(LocalizationContext);

  return (
    <ContentScreen>
      <SearchBar
        onTextChange={(term: string) => {
          itunesSearch.searchTerm$(term);
        }}
        placeholder={ITUNES_SCREEN.FILTER_BY_TERM}
        animatedValue={offsetRef}
      />

      <Animated.FlatList
        ref={flatListRef}
        data={paginationList.paginatedData}
        renderItem={({item}) => {
          return <RenderItem {...item} />;
        }}
        keyExtractor={({trackId}: ItunesData) => String(trackId)}
        onEndReached={nextPage}
        onEndReachedThreshold={0}
        scrollEventThrottle={10}
        keyboardShouldPersistTaps={'never'}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: offsetRef}}}],
          {useNativeDriver: false},
        )}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          marginBottom: 120,
        }}
      />
    </ContentScreen>
  );
};

export default ItunesList;
