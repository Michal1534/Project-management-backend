import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateTaskRequest {
    @ApiProperty({
        description: 'task_name',
        example: 'This is a task',
    })
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        description: 'task_description',
        example: 'This is a task description',
    })
    @IsNotEmpty()
    description: string;

    @ApiProperty({
        description: 'task_status',
        example: 'In Progress',
    })
    @IsNotEmpty()
    status: string;

    @ApiProperty({
        description: 'task_priority',
        example: 'High',
    })
    @IsNotEmpty()
    priority: string;

    @ApiProperty({
        description: 'task_type',
        example: 'Bug',
    })
    @IsNotEmpty()
    type: string;

    @ApiProperty({
        description: 'story_points',
        example: 5,
    })
    @IsNotEmpty()
    storyPoints: number;

    @ApiProperty({
        description: 'assigned_to',
        example: 1,
    })
    @IsNotEmpty()
    assignedTo: number;

    @ApiProperty({
        description: 'created_by',
        example: 1,
    })
    @IsNotEmpty()
    createdBy: number;

    @ApiProperty({
        description: 'sprint_id',
        example: 1,
    })
    @IsNotEmpty()
    sprintId: number;

    @ApiProperty({
        description: 'component',
        example: 'Frontend',
    })
    @IsNotEmpty()
    component: string;
}
