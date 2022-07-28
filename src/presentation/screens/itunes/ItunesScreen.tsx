import React, {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';

import {useItunesSearch} from '@useCases/useItunesSearch';
import ItunesList from '@components/lists/itunesList';
import useFadeAnimation from '@hook/UseFadeAnimation';

import {ContentScreen, ContentCentered} from './style';

export default () => {
  const itunesSearch = useItunesSearch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1500);
  }, []);

  const fadeAnim = useFadeAnimation(isLoaded);

  return (
    <ContentScreen>
      {/* isLoaded */}
      {isLoaded ? (
        <ContentScreen style={{opacity: fadeAnim}}>
          <ItunesList {...itunesSearch} />
        </ContentScreen>
      ) : (
        <ContentCentered>
          <ActivityIndicator size="large" color="#6a20ce" />
        </ContentCentered>
      )}
    </ContentScreen>
  );
};
