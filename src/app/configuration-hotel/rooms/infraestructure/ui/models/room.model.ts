export class RoomModel {
    constructor(
        public name: string,
        public price: number | null,
        public details: string,
        public levelId: number | null,
        public categoryId: number | null
    ) { }
}