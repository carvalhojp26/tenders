import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
export declare class ExternalApiService {
    private readonly httpService;
    constructor(httpService: HttpService);
    fetchTendersData(country: string, page: number, title?: string, category?: string, date?: 'asc' | 'desc', value?: 'asc' | 'desc'): Observable<any>;
    private filterAndSortData;
    private determineValue;
    private mapTenderData;
}
