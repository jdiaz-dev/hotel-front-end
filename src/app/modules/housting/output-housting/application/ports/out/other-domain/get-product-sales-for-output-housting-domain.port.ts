import { Observable } from 'rxjs';
import { IProductsSaled } from 'src/app/modules/sales/product-sales/infraestructure/interfaces/products-saled.interface';

export interface GetProductSalesForOutputHoustingDomainPort {
    getProductSaled(houstingId: number): Observable<IProductsSaled[]>;
}
