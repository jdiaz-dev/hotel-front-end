import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { REG_EXP } from 'src/app/shared/consts/reg-exp.enum';
import { FormsValidForHoustingService } from 'src/app/modules/housting/input-housting/infraestructure/ui/services/communication/forms-valid-for-housting.service';
import { ClientModel } from '../../models/client.model';
import { ClientsService } from '../../../out/clients.service';
import { VerifyClientSavedService } from 'src/app/modules/housting/input-housting/infraestructure/ui/services/communication/verify-client-saved.service';

@Component({
    selector: 'app-form-client',
    templateUrl: './form-client.component.html',
    styleUrls: ['./form-client.component.scss'],
})
export class FormClientComponent implements OnInit {
    clientData!: FormGroup;
    client: ClientModel = new ClientModel(null, '', '', '');
    constructor(
        private formBuilder: FormBuilder,
        private readonly clientsService: ClientsService,
        private readonly formsValidForHoustingService: FormsValidForHoustingService,
        private readonly verifyClientSavedService: VerifyClientSavedService,
    ) {}

    ngOnInit(): void {
        this.clientData = this.formBuilder.group({
            dni: ['', [Validators.maxLength(8), Validators.pattern(REG_EXP.numeric)]],
            names: ['', [Validators.required, Validators.maxLength(30), Validators.pattern(REG_EXP.alphabetic)]],
            surnames: ['', [Validators.required, Validators.maxLength(30), Validators.pattern(REG_EXP.alphabetic)]],
            visitReason: ['', [Validators.maxLength(60), Validators.pattern(REG_EXP.alphanumeric)]],
        });
        this.checkIfClientFormIsValid();
    }
    get clientControl() {
        return this.clientData.controls;
    }
    async saveClient() {
        const client: any = await this.clientsService.createClient(this.clientData.value).toPromise();
        if (client.id) this.verifyClientSavedService.confirmUserSaved(client.id);
    }
    checkIfClientFormIsValid() {
        this.clientData.statusChanges.subscribe((statusForm) => {
            if (statusForm == 'VALID') {
                this.formsValidForHoustingService.confirmFormClientValid(true);
            } else {
                this.formsValidForHoustingService.confirmFormClientValid(false);
            }
        });
    }
}
