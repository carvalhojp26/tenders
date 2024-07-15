import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExternalApiService } from './external-api/external-api.service';
import { TendersController } from './tenders/tenders.controller';
import { HttpModule } from '@nestjs/axios'
import { TendersModule } from './tenders/tenders.module';

@Module({
  imports: [HttpModule, TendersModule],
  controllers: [AppController, TendersController],
  providers: [AppService, ExternalApiService],
})
export class AppModule {}
