export interface MarvelSeries {
  code?: number;
  status?: string;
  copyright?: string;
  attributionText?: string;
  attributionHTML?: string;
  etag?: string;
  data?: Data;
}

export interface Data {
  offset?: number;
  limit?: number;
  total?: number;
  count?: number;
  results?: Result[];
}

export interface Result {
  id?: number;
  title?: string;
  description?: null | string;
  resourceURI?: string;
  urls?: Url[];
  startYear?: number;
  endYear?: number;
  rating?: Rating;
  type?: string;
  modified?: string;
  thumbnail?: Thumbnail;
  creators?: Creators;
  characters?: Characters;
  stories?: Stories;
  comics?: Characters;
  events?: Characters;
  next?: Next | null;
  previous?: null;
}

export interface Characters {
  available?: number;
  collectionURI?: string;
  items?: Next[];
  returned?: number;
}

export interface Next {
  resourceURI?: string;
  name?: string;
}

export interface Creators {
  available?: number;
  collectionURI?: string;
  items?: CreatorsItem[];
  returned?: number;
}

export interface CreatorsItem {
  resourceURI?: string;
  name?: string;
  role?: string;
}

export type Rating = "" | "Rated T" | "Marvel Psr" | "Rated T+";

export interface Stories {
  available?: number;
  collectionURI?: string;
  items?: StoriesItem[];
  returned?: number;
}

export interface StoriesItem {
  resourceURI?: string;
  name?: string;
  type?: ItemType;
}

export type ItemType = "cover" | "interiorStory";

export interface Thumbnail {
  path?: string;
  extension?: Extension;
}

export type Extension = "jpg";

export interface Url {
  type?: UrlType;
  url?: string;
}

export type UrlType = "detail";
