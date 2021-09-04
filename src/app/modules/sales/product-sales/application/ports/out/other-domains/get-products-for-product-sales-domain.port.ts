import { Observable } from 'rxjs';
import { ProductData } from 'src/app/shared/interfaces/product-data';

export interface GetProductsForProductSalesDomainPort {
  getProducts(): Observable<ProductData[]>
}