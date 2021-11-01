import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IDataClientsResponse } from '../../interfaces/data-clients-response';
import { IClientsFilteredDip } from '../dip/clients-filtered';
import { INewPageDataDip } from '../dip/new-page-data';

@Injectable({
    providedIn: 'root',
})
export class ClientListService implements IClientsFilteredDip, INewPageDataDip {
    private clientsFilteredSource = new Subject<IDataClientsResponse>();
    private newPageDataSource = new Subject<number>();

    clientsFiltered$ = this.clientsFilteredSource.asObservable();
    newPageData$ = this.newPageDataSource.asObservable();

    clientsFiltered(dataClientsResponse: IDataClientsResponse) {
        this.clientsFilteredSource.next(dataClientsResponse);
    }

    newPageData(offset: number) {
        this.newPageDataSource.next(offset);
    }
}
