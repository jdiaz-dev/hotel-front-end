export interface IHoustingResponse {
    id: number;
    price: number;
    moneyPaid: number;
    entryDate: string;
    entryTime: string;
    finished: boolean;
    client: {
        dni: number;
        names: string;
        surnames: string;
    };
}
