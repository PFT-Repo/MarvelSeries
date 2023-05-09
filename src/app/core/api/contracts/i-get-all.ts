import { Observable } from "rxjs";
import { TableViewModel } from "src/app/shared/models/table-view-model";

export interface IGetAll {
  getAllData: (offset?: number) => Observable<TableViewModel[] | undefined>;
}
