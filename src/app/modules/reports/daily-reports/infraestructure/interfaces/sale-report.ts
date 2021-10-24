import { IBase } from '../../../../../shared/interfaces/server-reponse/base';

export interface ISaleReport {
    id: number;
    amount: number;
    totalPrice: number;
    date: string;
    time: string;
    housting: {
        id: number;
        room: {
            id: number;
            name: number;
        };
    };
    product: {
        id: number;
        name: string;
        price: string;
    };
}

export interface ISaleReportResponse extends IBase {
    rows: ISaleReport[];
}
