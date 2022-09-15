import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

export class AllVersionCardForUserDto {
    @IsInt()
    @Type(() => Number)
    uniqueCardId: number;

    @IsInt()
    @IsOptional()
    @Type(() => Number)
    userId: number;
}
