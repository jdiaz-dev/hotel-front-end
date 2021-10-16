import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ConfirmComponent } from 'src/app/shared/modals/confirm-remove.component';
import { FormsValidForHoustingService } from '../services/communication/forms-valid-for-housting.service';
import { ICustomMessage } from '../../../../../../shared/modals/custom-message.interface';

@Component({
    selector: 'app-button-create-housting',
    templateUrl: './button-create-housting.component.html',
    styleUrls: ['./button-create-housting.component.scss'],
})
export class ButtonCreateHoustingComponent implements OnInit {
    @Output() confirmed = new EventEmitter<boolean>();
    clientFormValid!: boolean;
    houstingFormValid!: boolean;
    formClientSubscription!: Subscription;
    formHoustingSubscription!: Subscription;

    constructor(private formsValidForHoustingService: FormsValidForHoustingService, private dialog: MatDialog) {}

    ngOnInit(): void {
        this.clientFormValid = false;
        this.houstingFormValid = false;
        this.checkIfFormClientIsValid();
        this.checkIfFormHoustingIsValid();
    }
    ngOnDestroy() {
        this.formClientSubscription.unsubscribe();
        this.formHoustingSubscription.unsubscribe();
    }
    checkIfFormClientIsValid() {
        this.formClientSubscription = this.formsValidForHoustingService.formClientValid$.subscribe(
            (formValid: boolean) => {
                this.clientFormValid = formValid;
            },
        );
    }
    checkIfFormHoustingIsValid() {
        this.formHoustingSubscription = this.formsValidForHoustingService.formHoustingValid$.subscribe(
            (formValid: boolean) => {
                this.houstingFormValid = formValid;
            },
        );
    }
    openDialogToSaveHousting() {
        const config: ICustomMessage = {
            title: 'Crear hospedamiento',
            toCompleteDescription: 'de crear este hospedamiento',
        };
        let dialogRef = this.dialog.open(ConfirmComponent, { data: config, width: '25%' });
        dialogRef.afterClosed().subscribe((result: boolean) => {
            if (result) this.confirmed.emit(true);
        });
    }
}
