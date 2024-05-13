import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserProjectsRequest {
    @ApiProperty({
        description: 'user_id',
        example: 1,
    })
    @IsNotEmpty()
    userId: number;

    @ApiProperty({
        description: 'project_id',
        example: 1,
    })
    @IsNotEmpty()
    projectId: number;
}
