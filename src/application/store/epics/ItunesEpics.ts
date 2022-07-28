import {map, pluck, switchMap, takeUntil, of} from 'rxjs';
import {ofType, StateObservable, combineEpics} from 'redux-observable';
import {TRootState, TDependecy} from '@store/StoreSetup';

import {ItunesApiResponse} from '@customTypes/ItunesTypes';
import {SEARCH_ITUNES_DATA} from '@store/actions/ItunesActions';

const searchTermEpic$ = (
  action$: any,
  _: StateObservable<TRootState>,
  {itunesApi: {searchTerm$}}: TDependecy,
) =>
  action$.pipe(
    ofType(SEARCH_ITUNES_DATA),
    pluck('payload'),
    switchMap((term: string) => {
      return term.trim()
        ? searchTerm$(term)
        : of({
            resultCount: 0,
            results: [],
          });
    }),
    map((data: ItunesApiResponse) => {
      // returning the data
      return {
        type: `${SEARCH_ITUNES_DATA}_EPIC`,
        payload: data.results.filter(song => song.trackName), // filtering song's with empty trackName
      };
    }),
    takeUntil(action$.pipe(ofType(`${SEARCH_ITUNES_DATA}_CANCEL`))),
  );

export default combineEpics(searchTermEpic$);
