import { Observable } from 'rxjs';
import { IDataClientsResponse } from '../../interfaces/data-clients-response';

export interface IClientsFilteredDip {
    clientsFiltered$: Observable<IDataClientsResponse>;
    clientsFiltered(dataClientsResponse: IDataClientsResponse): void;
}
