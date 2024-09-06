import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CommentService } from './comment.service';
import { CreateCommentRequest } from './request/create-comment.request';

@ApiTags('comment')
@Controller('comment')
export class CommentController {
    constructor(private readonly commentService: CommentService) {}

    @ApiResponse({
        description: 'Comments from task',
    })
    @Get('task/:id')
    async findTaskComments(@Param('id') id: number) {
        console.log('Comments fetched with taskId ' + id);
        return this.commentService.getTaskComments(+id);
    }

    @ApiResponse({
        description: 'Comment',
    })
    @Get(':id')
    async findOneCommentById(@Param('id') id: number) {
        console.log('One comment fetched with id: ' + id);
        return this.commentService.getOneComment(+id);
    }

    @ApiCreatedResponse({
        description: 'Comment has been created',
    })
    @Post('/create-comment')
    async addComment(@Body() createCommentRequest: CreateCommentRequest) {
        this.commentService.createComment(createCommentRequest);
    }

    @Put(':id')
    async updateComment(@Param('id') id: number, @Body() updateComment: CreateCommentRequest) {
        console.log('Comment updated with id: ' + id);
        return this.commentService.updateComment(id, updateComment);
    }

    @Delete(':id')
    async deleteComment(@Param('id') id: number) {
        console.log('Comment deleted with id: ' + id);
        return this.commentService.deleteComment(+id);
    }
}
