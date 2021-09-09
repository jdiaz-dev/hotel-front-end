import { ProductData } from 'src/app/shared/interfaces/product/get-product-response';
import { Constructor } from 'src/app/shared/types/constructor';
import { IAmountProduct } from '../../../interfaces/amount-product.interface';

export function AvailableProductsMyxin<T extends Constructor<{}>>(Base: T = class {} as any) {
  return class extends Base {
    addTotalToProductData(productData: ProductData[]): ProductData[] {
      productData.map((obj: ProductData | any) => {
        obj.amount = 0;
        return obj;
      });
      return productData;
    }
    /* updateAmountProducts(productData: ProductData[], amountProductsUpdated: IAmountProduct) {
      productData.map((obj: ProductData | any) => {
        if (obj['id'] === amountProductsUpdated.id) {
          obj.amount = amountProductsUpdated.amount;
        }
        return obj;
      });
      return productData;
    } */
  };
}
