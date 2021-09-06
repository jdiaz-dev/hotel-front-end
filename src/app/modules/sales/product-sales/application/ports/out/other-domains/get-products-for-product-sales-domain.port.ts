import { Observable } from 'rxjs';
import { GetProductsResponse } from 'src/app/shared/interfaces/product/get-product-response';
import { IQueries } from 'src/app/shared/interfaces/queries/queries.interface';

export interface GetProductsForProductSalesDomainPort {
  getProducts(queries: IQueries): Observable<GetProductsResponse>;
}
