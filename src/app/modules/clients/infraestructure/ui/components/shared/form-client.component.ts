import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { REG_EXP } from 'src/app/shared/consts/reg-exp.enum';
import { FormsValidForHoustingService } from 'src/app/modules/housting/input-housting/infraestructure/ui/services/communication/forms-valid-for-housting.service';
import { ClientModel } from '../../models/client.model';
import { ClientsService } from '../../../out/clients.service';
import { VerifyClientSavedService } from 'src/app/modules/housting/input-housting/infraestructure/ui/services/communication/verify-client-saved.service';
import { Subscription } from 'rxjs';
import { IGetClientsRequest } from 'src/app/modules/clients/application/ports/in/get-clients.request';
import { IKeywordToSearchDip } from 'src/app/shared/components/searcher/dip/keyword-to-search';
import { SearcherService } from 'src/app/shared/components/searcher/searcher.service';
import { IQueries } from 'src/app/shared/interfaces/queries/queries.interface';
import { IDataClient, IDataClientsResponse } from '../../interfaces/data-clients-response';
import { IDataToFilterDip } from 'src/app/shared/components/searcher/dip/data-to-filter';
import { IDataSelectedDip } from 'src/app/shared/components/searcher/dip/data-selected';

@Component({
    selector: 'app-form-client',
    templateUrl: './form-client.component.html',
    styleUrls: ['./form-client.component.scss'],
})
export class FormClientComponent implements OnInit, OnDestroy {
    private getClientsRequest: IGetClientsRequest;
    private keywordToSearchDip: IKeywordToSearchDip;
    private dataToFilterDip: IDataToFilterDip;
    private dataSelectedDip: IDataSelectedDip;

    clientData!: FormGroup;
    client: ClientModel = new ClientModel(null, null, '', '', '');
    clientDataSubs!: Subscription;
    theKeyword!: string;
    clientList!: IDataClient[];

    keywordToSearchSubs!: Subscription;
    dataSelectedSubs!: Subscription;
    getClientsSubs!: Subscription;
    clientId!: number;

    constructor(
        private formBuilder: FormBuilder,
        private readonly clientsService: ClientsService,
        private readonly formsValidForHoustingService: FormsValidForHoustingService,
        private readonly verifyClientSavedService: VerifyClientSavedService,
        searcherService: SearcherService,
    ) {
        this.getClientsRequest = clientsService;
        this.keywordToSearchDip = searcherService;
        this.dataToFilterDip = searcherService;
        this.dataSelectedDip = searcherService;
    }

    ngOnInit(): void {
        this.clientData = this.formBuilder.group({
            clientId: [undefined],
            dni: ['', [Validators.maxLength(8), Validators.pattern(REG_EXP.numeric)]],
            cellphone: ['', [Validators.maxLength(15), Validators.pattern(REG_EXP.numeric)]],
            names: ['', [Validators.required, Validators.maxLength(30), Validators.pattern(REG_EXP.alphabetic)]],
            surnames: ['', [Validators.required, Validators.maxLength(30), Validators.pattern(REG_EXP.alphabetic)]],
            visitReason: ['', [Validators.maxLength(60), Validators.pattern(REG_EXP.alphanumeric)]],
        });
        this.checkIfClientFormIsValid();
        this.obtainKeyword();
        this.obtainDataSelected();
    }
    ngOnDestroy() {
        if (this.clientDataSubs) this.clientDataSubs.unsubscribe();
        if (this.keywordToSearchSubs) this.keywordToSearchSubs.unsubscribe();
        if (this.dataSelectedSubs) this.dataSelectedSubs.unsubscribe();
        if (this.getClientsSubs) this.getClientsSubs.unsubscribe();
    }
    get clientControl() {
        return this.clientData.controls;
    }
    async saveClient() {
        if (this.clientId) this.clientData.get('clientId')?.setValue(this.clientId);
        const client: any = await this.clientsService.createClient(this.clientData.value).toPromise();
        if (client.id) this.verifyClientSavedService.confirmUserSaved(client.id);
    }
    checkIfClientFormIsValid() {
        this.clientDataSubs = this.clientData.statusChanges.subscribe((statusForm) => {
            if (statusForm == 'VALID') {
                this.formsValidForHoustingService.confirmFormClientValid(true);
            } else {
                this.formsValidForHoustingService.confirmFormClientValid(false);
            }
        });
    }
    private obtainKeyword() {
        this.keywordToSearchSubs = this.keywordToSearchDip.keywordToSearch$.subscribe((keyword: string) => {
            this.theKeyword = keyword;
            if (keyword != '') this.loadClients();
        });
    }
    private loadClients(offset?: number) {
        const queries: IQueries = {
            limit: 5,
            offset: offset ? offset : 0,
            searchText: this.theKeyword,
        };
        this.getClientsSubs = this.getClientsRequest.getClients(queries).subscribe((response: IDataClientsResponse) => {
            this.clientList = response.rows;
            this.dataToFilterDip.dataToFilter(response.rows);
        });
    }
    private obtainDataSelected() {
        this.dataSelectedSubs = this.dataSelectedDip.dataSelected$.subscribe((data: any) => {
            console.log(data);
            this.client = new ClientModel(data.dni, data.cellphone, data.names, data.surnames, '', data.id);
            this.clientId = data.id;
            console.log(this.client);
        });
    }
}
