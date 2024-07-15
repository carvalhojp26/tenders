import { ExternalApiService } from '../external-api/external-api.service';
import { QueryDTO } from 'src/dto/query.dto';
export declare class TendersController {
    private readonly externalApiService;
    constructor(externalApiService: ExternalApiService);
    getTendersData(country: string, query: QueryDTO): Promise<import("rxjs").Observable<any>>;
}
