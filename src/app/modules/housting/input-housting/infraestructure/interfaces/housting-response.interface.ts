export interface IHoustingResponse {
    id: number;
    price: number;
    moneyPaid: number;
    entryDate: string;
    entryTime: string;
    finished: boolean;
    client: {
        id: number;
        dni: number;
        names: string;
        surnames: string;
        visitReason: string;
    };
}
