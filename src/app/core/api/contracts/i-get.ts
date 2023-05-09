import { Observable } from "rxjs";

export interface IGet {
  get: (id: number) => Observable<object>;
}
