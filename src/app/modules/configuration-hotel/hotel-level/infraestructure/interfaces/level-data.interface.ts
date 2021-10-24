import { IBase } from './../../../../../shared/interfaces/server-reponse/base';

export interface LevelData {
    id: number;
    number: number;
    name: string;
}

export interface ILevelsDataResponse extends IBase {
    rows: LevelData[];
}
