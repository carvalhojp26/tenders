import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
export declare class InputValidationMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>>>;
}
