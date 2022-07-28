export type ItunesData = {
  artistName: string;
  artworkUrl100: string;
  trackName: string;
  trackId: number;
};

export type ItunesApiResponse = {
  resultCount: number;
  results: [ItunesData];
};

export type useSearchType = {
  data: ItunesData[];
  searchTerm$: (term: string) => void;
};
