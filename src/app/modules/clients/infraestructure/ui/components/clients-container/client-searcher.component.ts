import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { debounceTime, map, startWith } from 'rxjs/operators';
import { IGetClientsRequest } from 'src/app/modules/clients/application/ports/in/get-clients.request';
import { IQueries } from 'src/app/shared/interfaces/queries/queries.interface';
import { ClientsService } from '../../../out/clients.service';
import { IDataClient, IDataClientsResponse } from '../../interfaces/data-clients-response';
import { IClientsFilteredDip } from '../dip/clients-filtered';
import { INewPageDataDip } from '../dip/new-page-data';
import { ClientListService } from './client-list.service';

@Component({
    selector: 'app-client-searcher',
    templateUrl: './client-searcher.component.html',
    styleUrls: ['./client-searcher.component.scss'],
})
export class ClientSearcherComponent implements OnInit, OnDestroy {
    private getClientsRequest: IGetClientsRequest;
    private clientsFilteredDip: IClientsFilteredDip;
    private newPageDataDip: INewPageDataDip;

    myControl = new FormControl();
    clientList!: IDataClient[];
    formGroupKeyword!: FormGroup;
    clientsFiltered!: any[];
    theKeyword!: string;

    newPageDataSubs!: Subscription;

    constructor(clientListService: ClientListService, clientsService: ClientsService, private fb: FormBuilder) {
        this.getClientsRequest = clientsService;
        this.clientsFilteredDip = clientListService;
        this.newPageDataDip = clientListService;
    }
    ngOnInit() {
        this.theKeyword = '';
        this.initFormKeyword();
        this.loadNextPage();
        this.loadData();
    }
    ngOnDestroy(): void {
        if (this.newPageDataSubs) this.newPageDataSubs.unsubscribe();
    }
    private initFormKeyword() {
        this.formGroupKeyword = this.fb.group({
            keyword: [''],
        });
        this.formGroupKeyword
            .get('keyword')
            ?.valueChanges.pipe(debounceTime(300)) //debounceTime: to delay search
            .subscribe((result: string) => {
                if (result && result.length) {
                    //this.filterClients(result);
                    this.theKeyword = result;
                    this.loadData();
                } else {
                    this.clientsFiltered = [];
                }
            });
    }

    private async loadData(offset?: number) {
        const queries: IQueries = {
            limit: 5,
            offset: offset ? offset : 0,
            searchText: this.theKeyword,
        };
        const clients: IDataClientsResponse = await this.getClientsRequest.getClients(queries).toPromise();
        this.clientList = clients.rows;
        if (clients) {
            this.filterClientsToAutocomplete();
            this.clientsFilteredDip.clientsFiltered(clients);
        }
    }

    private filterClientsToAutocomplete() {
        this.clientsFiltered = this.clientList.filter((client: IDataClient) => {
            return client.names.toLowerCase().indexOf(this.theKeyword.toLowerCase()) > -1;
        });
    }
    loadNextPage() {
        this.newPageDataDip.newPageData$.subscribe((offset: number) => {
            this.loadData(offset);
        });
    }
}
