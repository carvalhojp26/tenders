import { Controller, Get, Param, Query } from '@nestjs/common';
import { ExternalApiService } from '../external-api/external-api.service'
import { QueryDTO } from 'src/dto/query.dto';

@Controller()
export class TendersController {
    constructor(private readonly externalApiService: ExternalApiService) {}

    @Get(':country')
    async getTendersData(
        @Param('country') country: string,
        @Query() query: QueryDTO
    ) {
        return await this.externalApiService.fetchTendersData(country, query.page, query.title, query.category, query.date, query.value)
    }
}