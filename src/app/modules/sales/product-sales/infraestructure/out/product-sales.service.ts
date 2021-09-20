import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetProductSalesForOutputHoustingDomainPort } from 'src/app/modules/housting/output-housting/application/ports/out/other-domain/get-product-sales-for-output-housting-domain.port';
import { ICompleteProductSaledPaymentPort } from 'src/app/modules/housting/output-housting/application/ports/out/other-domain/complete-product-saled-payment';
import { AccessKeys } from 'src/app/shared/enums/name-token';
import { SERVER } from 'src/app/shared/enums/server.enum';
import { StateCashService } from 'src/app/shared/services/state-cash.service';
import { StateUserService } from 'src/app/shared/services/state-user.service';
import { environment } from 'src/environments/environment';
import { IProductsSaled } from '../interfaces/products-saled.interface';
import { ProductAddedModel } from '../ui/models/product-added.model';
import { GetCashIdForHoustingDomain } from './../../../../housting/input-housting/application/ports/out/other-domain/get-cash-id-for-housting-domain';

@Injectable({
    providedIn: 'root',
})
export class ProductSaledService
    implements GetProductSalesForOutputHoustingDomainPort, ICompleteProductSaledPaymentPort
{
    private getCashIdForHoustingDomain: GetCashIdForHoustingDomain;
    private serverUrl = environment.serverUrl;
    private headers = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set(AccessKeys.NAME_TOKEN, this.stateUserService.getToken());
    private hotelId!: number;
    private cashId!: number;

    constructor(
        private http: HttpClient,
        private stateUserService: StateUserService,
        stateCashService: StateCashService,
    ) {
        this.getCashIdForHoustingDomain = stateCashService;
    }
    createProductSaled(productSaled: ProductAddedModel, houstingId: number) {
        this.loadRequiredParamsForPath();
        const body = JSON.stringify(productSaled);
        return this.http.post(
            `${this.serverUrl}/${SERVER.PREFIX}/product-saled/${this.hotelId}/${this.cashId}/${houstingId}/${productSaled.productId}`,
            body,
            {
                headers: this.headers,
            },
        );
    }
    getProductSaled(houstingId: number) {
        this.loadRequiredParamsForPath();
        return this.http.get<IProductsSaled[]>(
            `${this.serverUrl}/${SERVER.PREFIX}/product-saled/${this.hotelId}/${houstingId}`,
            {
                headers: this.headers,
            },
        );
    }
    completeProductSaledPayment(houstingId: number, productSaledId: number) {
        this.loadRequiredParamsForPath();
        return this.http.put(
            `${this.serverUrl}/${SERVER.PREFIX}/product-saled/finish-payment/${this.hotelId}/${this.cashId}/${houstingId}/${productSaledId}`,
            '',
            {
                headers: this.headers,
            },
        );
    }
    private loadRequiredParamsForPath() {
        this.hotelId = this.stateUserService.getHotelId();
        this.cashId = this.getCashIdForHoustingDomain.getCashId();
    }
}
