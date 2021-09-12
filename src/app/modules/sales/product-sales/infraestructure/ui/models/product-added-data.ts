export class ProductAddedData {
  constructor(
    public id: number,
    public amount: number,
    public name: string,
    public description: string,
    public price: number,
    public totalPrice: number | null,
  ) {}
}
