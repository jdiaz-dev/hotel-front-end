import { Observable } from 'rxjs';

export interface IDataToFilterDip {
    dataToFilter$: Observable<any[]>;
    dataToFilter(data: any[]): void;
}
