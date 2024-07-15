import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { TendersController } from "./tenders.controller";
import { ExternalApiService } from "src/external-api/external-api.service";
import { HttpModule } from "@nestjs/axios";
import { InputValidationMiddleware } from "src/middlewares/input-validation.middleware";

@Module({
    imports:[HttpModule],
    controllers: [TendersController],
    providers: [ExternalApiService],
})
export class TendersModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
        .apply(InputValidationMiddleware)
        .forRoutes(TendersController)
    }
}