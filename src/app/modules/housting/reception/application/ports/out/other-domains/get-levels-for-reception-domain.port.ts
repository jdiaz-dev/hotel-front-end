import { ILevelsDataResponse } from 'src/app/modules/configuration-hotel/hotel-level/infraestructure/interfaces/level-data.interface';
import { Observable } from 'rxjs';
import { IQueries } from 'src/app/shared/interfaces/queries/queries.interface';

export interface GetLevelsForReceptionDomain {
    getHotelLevels(queries: IQueries): Observable<ILevelsDataResponse>;
}
