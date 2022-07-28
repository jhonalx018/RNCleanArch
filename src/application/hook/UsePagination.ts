import {useState, useEffect} from 'react';
import {TPagination, TListState} from '@customTypes/ListTypes';

function paginationInitialState<T>(size: number): TListState<T> {
  console.log('here');
  return {
    paginatedData: [],
    pagination: {
      currentPage: 0,
      pageSize: size,
      totalPages: 0,
    },
  };
}

/**
 * @param  {T[]} entryList
 * @param  {number=5} PAGE_SIZE
 */
export function usePagination<T>(entryList: T[], PAGE_SIZE: number = 5) {
  console.log('here rendering');
  const [paginationList, setPaginatedList] = useState<TListState<T>>(
    paginationInitialState(PAGE_SIZE),
  );

  /**
   * @param  {T[]} data
   * @param  {TPagination} pagination
   * @returns T
   */
  const getDataPage = (data: T[], pagination: TPagination): T[] => {
    const offset = pagination.currentPage * pagination.pageSize;

    return data.length ? data.slice(offset, offset + pagination.pageSize) : [];
  };

  /**
   * @param  {T[]} data
   * @param  {number} size
   */
  const getTotalPages = (data: T[], size: number): number =>
    Math.ceil(data.length / size);

  const startPagination = () => {
    const {pagination} = paginationInitialState(PAGE_SIZE);

    pagination.totalPages = getTotalPages(entryList, pagination.pageSize);

    setPaginatedList({
      pagination,
      paginatedData: getDataPage(entryList, pagination),
    });
  };

  const nextPage = () => {
    const {pagination, paginatedData} = paginationList;

    pagination.currentPage += 1;

    const mergePaginated = [
      ...paginatedData,
      ...getDataPage(entryList, pagination),
    ];

    pagination.totalPages = getTotalPages(entryList, pagination.pageSize);

    setPaginatedList({
      pagination,
      paginatedData: mergePaginated,
    });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => startPagination(), [entryList]);

  return {
    nextPage,
    paginationList,
  };
}
