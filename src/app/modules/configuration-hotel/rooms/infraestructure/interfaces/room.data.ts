import { IBase } from 'src/app/shared/interfaces/server-reponse/base';

export interface RoomData {
    id: number;
    name: string;
    price: number;
    details: string;
    category: {
        id: number;
        category: string;
        price: number;
    };
    level: {
        id: number;
        number: number;
        name: string;
    };
    condition: {
        id: number;
        nameCondition: string;
    };
}

export interface IRoomsDataResponse extends IBase {
    rows: RoomData[];
}
