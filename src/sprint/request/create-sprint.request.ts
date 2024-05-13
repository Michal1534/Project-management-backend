import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateSprintRequest {
    @ApiProperty({
        description: 'sprint_name',
        example: 'This is a sprint',
    })
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        description: 'start_date',
        example: new Date(),
    })
    @IsNotEmpty()
    startDate: Date;

    @ApiProperty({
        description: 'end_date',
        example: new Date(),
    })
    @IsNotEmpty()
    endDate: Date;

    @ApiProperty({
        description: 'project_id',
        example: 1,
    })
    @IsNotEmpty()
    projectId: number;
}