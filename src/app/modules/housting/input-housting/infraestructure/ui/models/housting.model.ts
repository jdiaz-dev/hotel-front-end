export class HoustingModel {
    constructor(
        public price: number | null,
        public moneyPaid: number | null,
        public entryDate: string,
        public entryTime: string
    ) { }
}