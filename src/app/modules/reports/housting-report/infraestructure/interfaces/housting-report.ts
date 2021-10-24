import { IBase } from '../../../../../shared/interfaces/server-reponse/base';

export interface IEndHoustingReport {
    id: number;
    total: number;
    housting: {
        id: number;
        moneyPaid: number;
        entryDate: string;
        entryTime: string;
        outputDate: string;
        outputTime: string;
        room: {
            id: number;
            name: number;
        };
    };
    saleReport: {
        id: number;
        total: number;
    };
}

export interface IEndHoustingReportResponse extends IBase {
    rows: IEndHoustingReport[];
}
