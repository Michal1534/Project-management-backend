import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateCommentRequest {
    @ApiProperty({
        description: 'comment',
        example: 'This is a comment',
    })
    @IsNotEmpty()
    comment_content: string;

    @ApiProperty({
        description: 'user_id',
        example: 1,
    })
    @IsNotEmpty()
    userId: number;

    @ApiProperty({
        description: 'task_id',
        example: 1,
    })
    @IsNotEmpty()
    taskId: number;

    @ApiProperty({
        description: 'comment_date',
        example: new Date(),
    })
    @IsNotEmpty()
    commentDate: Date;
}
