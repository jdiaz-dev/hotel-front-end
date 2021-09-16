import { Observable } from 'rxjs';

export interface GetProductSalesForOutputHoustingDomainPort {
    getProductSales(houstingId: number): Observable<any>;
}
