import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateProjectRequest {
    @ApiProperty({
        description: 'project_name',
        example: 'This is a project',
    })
    @IsNotEmpty()
    name: string;
}
