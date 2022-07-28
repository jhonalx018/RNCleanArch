import {useItunesSearchSelector} from '@store/selectors/ItunesSelectors';
import useDispatcher from '@hook/UseDispatcher';

export const SEARCH_ITUNES_DATA = 'SEARCH_ITUNES_DATA';

import {useSearchType} from '@customTypes/ItunesTypes';

/**
 * TODO: need's a headerDoc tweak
 * @returns get songs, data
 */
export function useSearchItunesAction(): useSearchType {
  const dispatcher = useDispatcher<String>(SEARCH_ITUNES_DATA, '');
  const itunesData = useItunesSearchSelector();

  return {
    data: itunesData,
    searchTerm$: dispatcher,
  };
}
