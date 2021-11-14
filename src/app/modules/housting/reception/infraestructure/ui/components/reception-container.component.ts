import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CONFIG } from 'src/config/config';
import { ReceptionModeService } from '../services/reception-mode.service';

@Component({
    selector: 'app-reception-container',
    templateUrl: './reception-container.component.html',
    styleUrls: ['./reception-container.component.scss'],
    providers: [ReceptionModeService],
})
export class ReceptionContainerComponent implements OnInit {
    titleReception!: string;

    receptionMode = CONFIG.RECEPTION_MODE;
    constructor(public router: Router) {}

    ngOnInit(): void {
        this.checkCurrentModeReception();
    }
    checkCurrentModeReception() {
        const currentUrl = this.router.url.split('/')[3];
        if (currentUrl === CONFIG.RECEPTION_MODE.INPUT_HOUSTING) {
            this.titleReception = 'Entrada de hospedamiento';
        } else if (currentUrl === CONFIG.RECEPTION_MODE.OUTPUT_HOUSTING) {
            this.titleReception = 'Salida de hospedamiento';
        } else if (currentUrl === CONFIG.RECEPTION_MODE.PRODUCT_SALES) {
            this.titleReception = 'Venta de productos';
        }
    }
}

//CONFIG.RECEPTION_MODE.INPUT_HOUSTING
