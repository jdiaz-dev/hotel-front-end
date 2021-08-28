export class ProductModel {
    constructor(
        public code: string,
        public name: string,
        public brand: string,
        public details: string,
        public price: number | null
    ) { }
}