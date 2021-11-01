import { IBase } from 'src/app/shared/interfaces/server-reponse/base';

export interface IDataClient {
    id: number;
    names: string;
    surnames: string;
    dni: string;
    cellphone: number;
    visitReason: string;
}

export interface IDataClientsResponse extends IBase {
    rows: IDataClient[];
}
