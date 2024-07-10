import { Controller, Get, Param, Query } from '@nestjs/common';
import { ExternalApiService } from '../external-api/external-api.service'

@Controller()
export class TendersController {
    constructor(private readonly externalApiService: ExternalApiService) {}

    @Get(':country')
    async getTendersData(
        @Param('country') country: string,
        @Query('page') page:number,
        @Query('title') title?: string,
        @Query('category') category?: string,
        @Query('date') date?: 'asc' | 'desc',
        @Query('value') value?: 'asc' | 'desc'
    ) {
        const data = await this.externalApiService.fetchTendersData(country, page, title, category, date, value).toPromise()

        return data
    }
}