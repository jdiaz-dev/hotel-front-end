import { Observable } from 'rxjs';

export interface INewPageDataDip {
    newPageData$: Observable<number>;

    newPageData(offset: number): void;
}
