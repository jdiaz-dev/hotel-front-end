export type payed = 0 | 1;

//it is igual to a register in table product_sales in db
export class ProductAddedModel {
  constructor(
    public productId: number, //no store in db
    public amount: number,
    public totalPrice: number | null,
    public date: string,
    public time: string,
    public payed: payed,
    public price: number, //no save in db
    public name: string, //no save in db
  ) {}
}
