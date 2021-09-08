export interface ProductData {
  id: number;
  code: string;
  name: string;
  brand: string;
  details: string;
  price: number;
  amount: number; //property added manually to help product sales domain,  check available-products.myxin
}
export interface GetProductsResponse {
  count: number;
  rows: ProductData[];
}
