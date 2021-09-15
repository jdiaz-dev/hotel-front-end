import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs/internal/Subscription';
import { RoomData } from 'src/app/modules/configuration-hotel/rooms/infraestructure/interfaces/room.data';
import { FormsValidForHoustingService } from '../services/communication/forms-valid-for-housting.service';

@Component({
    selector: 'app-input-housting-container',
    templateUrl: './input-housting-container.component.html',
    styleUrls: ['./input-housting-container.component.scss'],
})
export class InputHoustingContainerComponent implements OnInit, OnDestroy {
    clientFormValid!: boolean;
    houstingFormValid!: boolean;
    formClientSubscription!: Subscription;
    formHoustingSubscription!: Subscription;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: RoomData,
        private formsValidForHoustingService: FormsValidForHoustingService,
    ) {}

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
}
