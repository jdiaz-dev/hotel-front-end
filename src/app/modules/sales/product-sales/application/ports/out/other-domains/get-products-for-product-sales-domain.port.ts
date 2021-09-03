import { Observable } from 'rxjs';
import { ProductData } from 'src/app/modules/sales/products/infraestructure/interfaces/product-data';

export interface GetProductsForProductSalesDomainPort {
  getProducts(): Observable<ProductData[]>
}