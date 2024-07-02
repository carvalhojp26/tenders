import { ExternalApiService } from '../external-api/external-api.service';
export declare class TendersController {
    private readonly externalApiService;
    constructor(externalApiService: ExternalApiService);
    getTendersData(country: string, title?: string, category?: string, date?: 'asc' | 'desc', value?: 'asc' | 'desc'): Promise<any>;
}
