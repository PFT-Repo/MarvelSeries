export interface ComicViewModel {
  id: number;
  title: string;
  imageLink: string;
  publicationDate?: string;
  writers?: string[];
  pencilers?: string[];
  coverArtists?: string[];
  description?: string;
}
