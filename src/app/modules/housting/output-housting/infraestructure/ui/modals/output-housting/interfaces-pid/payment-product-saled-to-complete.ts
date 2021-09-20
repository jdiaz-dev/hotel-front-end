import { Observable } from 'rxjs';
import { IProductsSaled } from 'src/app/modules/sales/product-sales/infraestructure/interfaces/products-saled.interface';

export interface IPaymentProductSaledToCompletePID {
    paymentProductSalesToComplete$: Observable<IProductsSaled[]>;
    sendPaymentProductSaledToComplet(products: IProductsSaled[]): void;
}
