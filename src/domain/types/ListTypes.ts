export type TPagination = {
  currentPage: number;
  pageSize: number;
  totalPages: number;
};

export type TListState<Type> = {
  paginatedData: Type[];
  pagination: TPagination;
};
