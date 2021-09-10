export class ProductAddedData {
  constructor(
    public amount: number,
    public name: string,
    public description: string,
    public price: number,
    public totalPrice: number,
  ) {}
}
