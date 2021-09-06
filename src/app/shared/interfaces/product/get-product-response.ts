export interface ProductData {
  id: number;
  code: string;
  name: string;
  brand: string;
  details: string;
  price: number;
}
export interface GetProductsResponse {
  count: number;
  rows: ProductData[];
}
