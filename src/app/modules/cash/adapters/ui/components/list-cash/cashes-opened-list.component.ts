import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-cashes-opened-list',
    templateUrl: './cashes-opened-list.component.html',
    styleUrls: ['./cashes-opened-list.component.scss'],
})
export class CashesOpenedListComponent implements OnInit {
    @Input('cashMode') cashMode!: string;
    constructor() {}

    ngOnInit(): void {}
}
