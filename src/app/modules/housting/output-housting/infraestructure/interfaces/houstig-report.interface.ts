interface ISaleReport {
    id: number;
    houstingId: number;
    total: number;
}

export interface IHoustingReport {
    id: number;
    total: number;
    saleReport: ISaleReport;
}
