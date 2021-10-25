export class CashModel {
    constructor(
        public openingMoney: number | null,
        public date: string,
        public time: string,
    ) { }
}