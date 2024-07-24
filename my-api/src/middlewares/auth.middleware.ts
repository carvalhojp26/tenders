import { Injectable, NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { Request, Response, NextFunction } from 'express';
import { auth } from 'firebase-admin';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    async use(req: Request, res: Response, next: NextFunction) {
        if(!req.headers.authorization) {
            throw new UnauthorizedException("Empty authorization header")
        }
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
            const token = req.headers.authorization.split(' ')[1];
            if(!token) {
                throw new UnauthorizedException("No token provided")
            }
            try {
                const decodedToken = await auth().verifyIdToken(token);
                req['user'] = decodedToken;
                next();
            } catch (error) {
                console.error(error);
                throw new UnauthorizedException();
            }
        } else {
            throw new UnauthorizedException()
        }
    }
}
