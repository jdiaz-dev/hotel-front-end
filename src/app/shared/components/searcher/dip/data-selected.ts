import { Observable } from 'rxjs';

export interface IDataSelectedDip {
    dataSelected$: Observable<{}>;
    dataSelected(data: {}): void;
}
