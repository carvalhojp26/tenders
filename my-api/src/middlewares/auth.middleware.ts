import { Injectable, NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { Request, Response, NextFunction } from 'express';
import { auth } from 'firebase-admin';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    async use(req: Request, res: Response, next: NextFunction) {
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
            const token = req.headers.authorization.split(' ')[1];

            try {
                const decodedToken = await auth().verifyIdToken(token);
                req['user'] = decodedToken;
                next();
            } catch (error) {
                console.error(error);
                res.status(401).json({ message: 'Unauthorized' });
            }
        } else {
            res.status(401).json({ message: 'Unauthorized' });
        }
    }
}
