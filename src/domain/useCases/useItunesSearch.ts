import {useEffect} from 'react';

import {useSearchItunesAction} from '@store/actions/ItunesActions';
import {useSearchType} from '@customTypes/ItunesTypes';

export const useItunesSearch = (): useSearchType => {
  const userSearch = useSearchItunesAction();

  useEffect(() => {
    userSearch.searchTerm$('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return userSearch;
};
