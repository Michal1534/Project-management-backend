import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateVacationRequest {
    @ApiProperty({
        description: 'user_id',
        example: 1,
    })
    @IsNotEmpty()
    userId: number;

    @ApiProperty({
        description: 'start_date',
        example: '2021-07-01',
    })
    @IsNotEmpty()
    startDate: string;

    @ApiProperty({
        description: 'end_date',
        example: '2021-07-05',
    })
    @IsNotEmpty()
    endDate: string;

    @ApiProperty({
        description: 'reason',
        example: 'Vacation',
    })
    @IsNotEmpty()
    reason: string;
}
