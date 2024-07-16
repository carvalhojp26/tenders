import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString, Min, IsIn } from 'class-validator'

export class QueryDTO {

    @IsInt()
    @Min(1)
    @IsOptional()
    @Type(() => Number)
    page?: number;

    @IsString()
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    category: string;

    @IsString()
    @IsOptional()
    @IsIn(['asc', 'desc'])
    date?: 'asc' | 'desc';

    @IsString()
    @IsOptional()
    @IsIn(['asc', 'desc'])
    value?: 'asc' | 'desc';
}