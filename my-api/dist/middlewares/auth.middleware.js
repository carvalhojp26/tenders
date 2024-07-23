"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const common_1 = require("@nestjs/common");
const firebase_admin_1 = require("firebase-admin");
let AuthMiddleware = class AuthMiddleware {
    async use(req, res, next) {
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
            const token = req.headers.authorization.split(' ')[1];
            try {
                const decodedToken = await (0, firebase_admin_1.auth)().verifyIdToken(token);
                req['user'] = decodedToken;
                next();
            }
            catch (error) {
                console.error(error);
                res.status(401).json({ message: 'Unauthorized' });
            }
        }
        else {
            res.status(401).json({ message: 'Unauthorized' });
        }
    }
};
exports.AuthMiddleware = AuthMiddleware;
exports.AuthMiddleware = AuthMiddleware = __decorate([
    (0, common_1.Injectable)()
], AuthMiddleware);
//# sourceMappingURL=auth.middleware.js.map