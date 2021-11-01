import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ClientsService } from '../../../modules/clients/infraestructure/out/clients.service';
import { IDataClient } from '../../../modules/clients/infraestructure/ui/interfaces/data-clients-response';
import { IDataSelectedDip } from './dip/data-selected';
import { IDataToFilterDip } from './dip/data-to-filter';
import { IKeywordToSearchDip } from './dip/keyword-to-search';
import { SearcherService } from './searcher.service';

@Component({
    selector: 'app-searcher',
    templateUrl: './searcher.component.html',
    styleUrls: ['./searcher.component.scss'],
})
export class SearcherComponent implements OnInit, OnDestroy {
    private dataToFilterDip: IDataToFilterDip;
    private keywordToSearchDip: IKeywordToSearchDip;
    private dataSelectedDip: IDataSelectedDip;

    myControl = new FormControl();
    clientList!: IDataClient[];
    formGroupKeyword!: FormGroup;
    dataFiltered!: any[];
    theKeyword!: string;

    newPageDataSubs!: Subscription;
    dataToFilterSubs!: Subscription;

    constructor(public searcherService: SearcherService, clientsService: ClientsService, private fb: FormBuilder) {
        this.dataToFilterDip = searcherService;
        this.keywordToSearchDip = searcherService;
        this.dataSelectedDip = searcherService;
    }
    ngOnInit() {
        this.initFormKeyword();
        this.dataToFilter();
        this.theKeyword = '';
    }
    ngAfterViewInit() {
        this.keywordToSearchDip.keywordToSearch(this.theKeyword);
    }
    ngOnDestroy(): void {
        if (this.newPageDataSubs) this.newPageDataSubs.unsubscribe();
        if (this.dataToFilterSubs) this.dataToFilterSubs.unsubscribe();
    }
    private initFormKeyword() {
        this.formGroupKeyword = this.fb.group({
            keyword: [''],
        });
        this.formGroupKeyword
            .get('keyword')
            ?.valueChanges.pipe(debounceTime(300)) //debounceTime: to delay search
            .subscribe((result: string) => {
                this.theKeyword = result;
                this.keywordToSearchDip.keywordToSearch(this.theKeyword);
                if (result && result.length) {
                    // console.log()
                } else {
                    this.dataFiltered = [];
                }
            });
    }
    private dataToFilter() {
        this.dataToFilterSubs = this.dataToFilterDip.dataToFilter$.subscribe((response: any[]) => {
            this.dataFiltered = response;
        });
    }
    dataSelected(data: any) {
        this.dataSelectedDip.dataSelected(data);
    }

    private filterClientsToAutocomplete() {
        this.dataFiltered = this.clientList.filter((client: IDataClient) => {
            return client.names.toLowerCase().indexOf(this.theKeyword.toLowerCase()) > -1;
        });
    }
}
