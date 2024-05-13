import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateProjectRequest {
    @ApiProperty({
        description: 'project_name',
        example: 'This is a project',
    })
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        description: 'project_description',
        example: 'This is a project description',
    })
    @IsNotEmpty()
    description: string;

    @ApiProperty({
        description: 'project_status',
        example: 'In Progress',
    })
    @IsNotEmpty()
    status: string;

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
}
