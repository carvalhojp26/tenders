import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExternalApiService } from './external-api/external-api.service';
import { TendersController } from './tenders/tenders.controller';
import { HttpModule } from '@nestjs/axios';
import { TendersModule } from './tenders/tenders.module';
import { AuthMiddleware } from './middlewares/auth.middleware';

@Module({
  imports: [HttpModule, TendersModule],
  controllers: [AppController, TendersController],
  providers: [AppService, ExternalApiService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
