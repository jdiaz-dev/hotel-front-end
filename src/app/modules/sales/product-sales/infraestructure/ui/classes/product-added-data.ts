export class ProductAddedData {
  constructor(
    public name: string,
    public description: string,
    public price: number,
    public totalPrice: number,
    public amount?: number,
  ) {}
}
