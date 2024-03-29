import { IBase } from 'src/app/shared/interfaces/server-reponse/base';

export interface ICashesWithDailyReports {
    id: number;
    openingMoney: number;
    closingMoney: number;
    closed: boolean;
    openingDate: string;
    openingTime: string;
    closingDate: string;
    closingTime: string;
    DailyReportModel: {
        id: number;
        moneyHousting: number;
        moneySales: number;
    };
}

export interface ICashWithDailyReportResponse extends IBase {
    rows: ICashesWithDailyReports[];
}
