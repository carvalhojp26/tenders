import { Injectable, NestMiddleware } from '@nestjs/common'
import { Request, Response, NextFunction } from 'express'
import { plainToInstance } from 'class-transformer'
import { validate } from 'class-validator'
import { QueryDTO } from 'src/dto/query.dto'

@Injectable()
export class InputValidationMiddleware implements NestMiddleware {
    async use(req: Request, res: Response, next: NextFunction) {
        const query = plainToInstance(QueryDTO, req.query)
        const errors = await validate(query)
        if (errors.length > 0) {
            return res.status(400).json(errors)
        }
        next()
    }
}