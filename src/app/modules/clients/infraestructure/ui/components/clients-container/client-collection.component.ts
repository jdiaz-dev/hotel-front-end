import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IGetClientsRequest } from 'src/app/modules/clients/application/ports/in/get-clients.request';
import { BasePaginator } from 'src/app/shared/components/paginator/base-paginator';
import { IQueries } from 'src/app/shared/interfaces/queries/queries.interface';
import { ClientsService } from '../../../out/clients.service';
import { IDataClient, IDataClientsResponse } from '../../interfaces/data-clients-response';
import { IKeywordToSearchDip } from '../../../../../../shared/components/searcher/dip/keyword-to-search';
import { SearcherService } from '../../../../../../shared/components/searcher/searcher.service';

@Component({
    selector: 'app-client-collection',
    templateUrl: './client-collection.component.html',
    styleUrls: ['./client-collection.component.scss'],
})
export class ClientCollectionComponent extends BasePaginator implements OnInit, OnDestroy {
    private getClientsRequest: IGetClientsRequest;
    private keywordToSearchDip: IKeywordToSearchDip;
    private theKeyword!: string;

    clientList!: IDataClient[];
    displayedColumns: string[] = ['N', 'Names', 'Surnames', 'DNI', 'Cellphone'];
    totalClients!: number;
    keywordToSearchSubs!: Subscription;

    constructor(clientsService: ClientsService, searcherService: SearcherService) {
        super();
        this.getClientsRequest = clientsService;
        this.keywordToSearchDip = searcherService;
    }

    ngOnInit(): void {
        this.theKeyword = '';
        this.obtainKeyword();
    }
    ngOnDestroy(): void {
        if (this.keywordToSearchSubs) this.keywordToSearchSubs.unsubscribe();
    }

    loadNextClients(offset: number) {
        this.loadClients(offset);
    }
    private obtainKeyword() {
        this.keywordToSearchSubs = this.keywordToSearchDip.keywordToSearch$.subscribe((keyword: string) => {
            this.theKeyword = keyword;
            this.loadClients();
        });
    }
    private async loadClients(offset?: number) {
        const queries: IQueries = {
            limit: 5,
            offset: offset ? offset : 0,
            searchText: this.theKeyword,
        };
        const clients: IDataClientsResponse = await this.getClientsRequest.getClients(queries).toPromise();
        this.clientList = clients.rows;
        if (clients) {
            this.clientList = clients.rows;
            this.totalClients = clients.count;
        }
    }
}
