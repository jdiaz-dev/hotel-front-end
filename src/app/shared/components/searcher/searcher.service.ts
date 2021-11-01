import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IDataToFilterDip } from './dip/data-to-filter';
import { IKeywordToSearchDip } from './dip/keyword-to-search';
import { IDataSelectedDip } from './dip/data-selected';

@Injectable({
    providedIn: 'root',
})
export class SearcherService implements IDataToFilterDip, IKeywordToSearchDip, IDataSelectedDip {
    //keyword
    private keywordToSearchSource = new Subject<string>();
    keywordToSearch$ = this.keywordToSearchSource.asObservable();
    keywordToSearch(keyword: string): void {
        this.keywordToSearchSource.next(keyword);
    }

    //clients to filter
    private clientsToFilterSource = new Subject<any[]>();
    dataToFilter$ = this.clientsToFilterSource.asObservable();
    dataToFilter(dataClient: any[]): void {
        this.clientsToFilterSource.next(dataClient);
    }

    //data selected
    private dataSelectedSource = new Subject<{}>();
    dataSelected$ = this.dataSelectedSource.asObservable();
    dataSelected(data: {}): void {
        this.dataSelectedSource.next(data);
    }
}
