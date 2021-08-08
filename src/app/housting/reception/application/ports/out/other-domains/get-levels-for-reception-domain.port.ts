import { LevelData } from "src/app/configuration-hotel/hotel-level/infraestructure/interfaces/level-data.interface";
import { Observable } from 'rxjs';

export interface GetLevelsForReceptionDomain {
    getHotelLevels(): Observable<LevelData[]>
}