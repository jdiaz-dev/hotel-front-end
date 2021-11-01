import { Observable } from 'rxjs';
import { IQueries } from 'src/app/shared/interfaces/queries/queries.interface';

export interface IGetClientsRequest {
    getClients(queries: IQueries): Observable<any>;
}
