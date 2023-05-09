import { Result } from "../models/series";
import { TableViewModel } from "../models/table-view-model";

export function seriesDto2Vm(comicDto: Result): TableViewModel {
  return {
    id: comicDto.id,
    title: comicDto.title?.replaceAll(/\([0-9]+\) /gi, ""),
    img: `${comicDto.thumbnail?.path}.${comicDto.thumbnail?.extension}`,
    date: comicDto.startYear?.toString(),
  };
}
