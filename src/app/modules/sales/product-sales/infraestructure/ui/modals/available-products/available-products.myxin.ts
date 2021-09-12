import { ProductData } from 'src/app/shared/interfaces/product/get-product-response';
import { Constructor } from 'src/app/shared/types/constructor';

export function AvailableProductsMyxin<T extends Constructor<{}>>(Base: T = class {} as any) {
  return class extends Base {
    addTotalToProductData(productData: ProductData[]): ProductData[] {
      productData.map((obj: ProductData | any) => {
        obj.amount = 0;
        return obj;
      });
      return productData;
    }
  };
}
