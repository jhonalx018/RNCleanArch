import {TRootState} from '@store/StoreSetup';
import {useSelector} from 'react-redux';
import {ItunesData} from '@customTypes/ItunesTypes';

/**
 * @returns ItunesData
 */
export const useItunesSearchSelector = (): [ItunesData] =>
  useSelector((state: TRootState) => state.itunesReducers);
