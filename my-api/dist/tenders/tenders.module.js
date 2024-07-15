"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TendersModule = void 0;
const common_1 = require("@nestjs/common");
const tenders_controller_1 = require("./tenders.controller");
const external_api_service_1 = require("../external-api/external-api.service");
const axios_1 = require("@nestjs/axios");
const input_validation_middleware_1 = require("../middlewares/input-validation.middleware");
let TendersModule = class TendersModule {
    configure(consumer) {
        consumer
            .apply(input_validation_middleware_1.InputValidationMiddleware)
            .forRoutes(tenders_controller_1.TendersController);
    }
};
exports.TendersModule = TendersModule;
exports.TendersModule = TendersModule = __decorate([
    (0, common_1.Module)({
        imports: [axios_1.HttpModule],
        controllers: [tenders_controller_1.TendersController],
        providers: [external_api_service_1.ExternalApiService],
    })
], TendersModule);
//# sourceMappingURL=tenders.module.js.map