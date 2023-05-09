import { Comic } from "../models/comic";
import { ComicViewModel } from "../models/comic-view-model";

export function comicDto2Vm(comicDto: Comic): ComicViewModel {
  return {
    id: comicDto.id,
    title: comicDto.title.replaceAll(/\([0-9]+\) /gi, ""),
    imageLink: `${comicDto.thumbnail.path}.${comicDto.thumbnail.extension}`,
    publicationDate: comicDto.dates[0].date.toString(),
    writers: comicDto.creators.items
      .filter((creator) => creator.role.includes("writer"))
      .map((creator) => creator.name)
      .splice(0, 1),
    pencilers: comicDto.creators.items
      .filter(
        (creator) => creator.role === "penciller" || creator.role === "penciler"
      )
      .map((creator) => creator.name),
    coverArtists: comicDto.creators.items
      .filter((creator) => creator.role.includes("cover"))
      .map((creator) => creator.name),
    description: comicDto.description,
  };
}
