"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputValidationMiddleware = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const query_dto_1 = require("../dto/query.dto");
let InputValidationMiddleware = class InputValidationMiddleware {
    async use(req, res, next) {
        const query = (0, class_transformer_1.plainToInstance)(query_dto_1.QueryDTO, req.query);
        const errors = await (0, class_validator_1.validate)(query);
        if (errors.length > 0) {
            return res.status(400).json(errors);
        }
        next();
    }
};
exports.InputValidationMiddleware = InputValidationMiddleware;
exports.InputValidationMiddleware = InputValidationMiddleware = __decorate([
    (0, common_1.Injectable)()
], InputValidationMiddleware);
//# sourceMappingURL=input-validation.middleware.js.map