import {ItunesData} from '@customTypes/ItunesTypes';
import {SEARCH_ITUNES_DATA} from '@store/actions/ItunesActions';

type ItunesReducer = {
  type: string;
  payload: [ItunesData];
};

/**
 * Hold itunes data
 * @param  {[ItunesData]=[]asunknownas[ItunesData]} state
 * @param  {ItunesReducer} action
 */
export default (
  state: [ItunesData] = [] as unknown as [ItunesData],
  action: ItunesReducer,
) => {
  switch (action.type) {
    case `${SEARCH_ITUNES_DATA}_EPIC`:
      return action.payload ? action.payload : [];
    default:
      return state;
  }
};
