import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-cash-container',
    templateUrl: './cash-container.component.html',
    styleUrls: ['./cash-container.component.scss'],
})
export class CashContainerComponent implements OnInit {
    cashMode!: string;

    constructor(public activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        this.checkModeCash();
    }
    private checkModeCash() {
        this.activatedRoute.params.subscribe((param: Params) => {
            this.cashMode = param.mode;
        });
    }
}
