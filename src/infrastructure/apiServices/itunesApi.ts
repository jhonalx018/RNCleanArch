import {map, Observable} from 'rxjs';

import Requester from '@api/requester';
import GlobalAxiosInstance from '@axiosInstances/GlobalAxiosInstance';
import {ItunesApiResponse} from '@customTypes/ItunesTypes';

export class ItunesApi {
  constructor(
    /**
     * @param  {} GlobalAxiosInstance
     */
    private readonly requester: Requester = new Requester(GlobalAxiosInstance),
  ) {}

  /**
   * TODO: What this method does?
   * @param  {String} term
   * @returns Observable
   */
  searchTerm$ = (term: String): Observable<ItunesApiResponse> => {
    return this.requester
      .get<ItunesApiResponse>('search', {
        params: {
          term,
          kind: 'song',
        },
      })
      .pipe(map(({data}) => data));
  };
}
