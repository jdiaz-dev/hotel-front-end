export interface RoomData {
    id: number
    name: string
    price: number
    details: string,
    category: {
        id: number
        category: string,
        price: number,
    }
    level: {
        id: number,
        number: number,
        name: string
    }
}