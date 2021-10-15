import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICustomMessage } from './custom-message.interface';

@Component({
    selector: 'app-confirm-remove',
    templateUrl: './confirm-remove.component.html',
    styleUrls: ['./confirm-remove.component.scss'],
})
export class ConfirmComponent implements OnInit {
    constructor(@Inject(MAT_DIALOG_DATA) public customMessage: ICustomMessage) {}

    ngOnInit(): void {}
}
