import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BasePaginator } from 'src/app/shared/components/paginator/base-paginator';
import { IDataClient, IDataClientsResponse } from '../../interfaces/data-clients-response';
import { IClientsFilteredDip } from '../dip/clients-filtered';
import { INewPageDataDip } from '../dip/new-page-data';
import { ClientListService } from './client-list.service';

@Component({
    selector: 'app-client-collection',
    templateUrl: './client-collection.component.html',
    styleUrls: ['./client-collection.component.scss'],
})
export class ClientCollectionComponent extends BasePaginator implements OnInit, OnDestroy {
    private clientsFilteredDip: IClientsFilteredDip;
    private newPageDataDip: INewPageDataDip;

    clientList!: IDataClient[];
    displayedColumns: string[] = ['Names', 'Surnames', 'DNI', 'Cellphone'];
    totalClients!: number;
    clientsFilteredSubs!: Subscription;

    constructor(clientListService: ClientListService) {
        super();
        this.clientsFilteredDip = clientListService;
        this.newPageDataDip = clientListService;
    }

    ngOnInit(): void {
        this.clientsToRender();
    }
    ngOnDestroy(): void {
        if (this.clientsFilteredSubs) this.clientsFilteredSubs.unsubscribe();
    }
    private clientsToRender() {
        this.clientsFilteredSubs = this.clientsFilteredDip.clientsFiltered$.subscribe(
            (result: IDataClientsResponse) => {
                this.clientList = result.rows;
                this.totalClients = result.count;
            },
        );
    }
    loadNextClients(offset: number) {
        this.newPageDataDip.newPageData(offset);
    }
}
