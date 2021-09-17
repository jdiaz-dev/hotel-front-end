interface Iproduct {
    id: number;
    name: string;
    price: number;
}

export interface IProductsSaled {
    id: number;
    amount: number;
    totalPrice: number;
    date: string;
    time: string;
    payed: boolean;
    product: Iproduct;
}
