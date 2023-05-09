export interface DataWrapper<T> {
  data: DataContainer<T>;
}
export interface DataContainer<T> {
  results: T;
}
export interface Comic {
  id: number;
  title: string;
  description: string;
  dates: ComicDate[];
  prices: ComicPrice[];
  thumbnail: Image;
  images: Image[];
  creators: CreatorList;
  characters: CharacterList;
  stories: StoryList;
  events: EventList;
}

export interface ComicDate {
  type: string;
  date: Date;
}
export interface ComicPrice {
  type: string;
  price: number;
}
export interface Image {
  path: string;
  extension: string;
}
export interface CreatorList {
  available: number;
  returned: number;
  collectionURI: string;
  items: CreatorSummary[];
}
export interface CreatorSummary {
  resourceURI: string;
  name: string;
  role: string;
}
export interface CharacterList {
  available: number;
  returned: number;
  collectionURI: string;
  items: CharacterSummary[];
}
export interface CharacterSummary {
  resourceURI: string;
  name: string;
  role: string;
}
export interface StoryList {
  available: number;
  returned: number;
  collectionURI: string;
  items: StorySummary[];
}
export interface StorySummary {
  resourceURI: string;
  name: string;
  type: string;
}
export interface EventList {
  available: number;
  returned: number;
  collectionURI: string;
  items: EventSummary[];
}
export interface EventSummary {
  resourceURI: string;
  name: string;
}
