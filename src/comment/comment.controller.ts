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

    // @ApiResponse({
    //     description: 'Measurement',
    // })
    // @Get(':id')
    // async findOneMeasurementById(@Param('id') id: number) {
    //     console.log('One measurement fetched with id: ' + id);
    //     return this.measurementsService.getOneMeasurement(+id);
    // }

    // @ApiResponse({
    //     description: 'User measurements',
    // })
    // @Get('user/:id')
    // async findUserMeasurements(@Param('id') id: number): Promise<Measurement[]> {
    //     console.log('User measurements fetched with userId ' + id);
    //     return this.measurementsService.getUserMeasurements(id);
    // }

    // @ApiCreatedResponse({
    //     description: 'Measurement has been created',
    // })
    // @ApiBadRequestResponse({
    //     description: 'Measurement has not been created',
    // })
    // @Post('/create-measurement')
    // async addMeasurement(@Body() createMeasurementRequest: CreateMeasurementRequest) {
    //     this.measurementsService.createMeasurement(createMeasurementRequest);
    // }

    // @ApiOkResponse({
    //     description: 'Measurement has been archived',
    // })
    // @ApiBadRequestResponse({
    //     description: 'Measurement has not been archived',
    // })
    // @Put('/archive-measurement')
    // async archiveMeasurement(@Body() archiveMeasurementRequest: ArchiveMeasurementRequest) {
    //     return this.measurementsService.archiveMeasurement(archiveMeasurementRequest);
    // }

    // @ApiOkResponse({
    //     description: 'Measurement has edited',
    // })
    // @ApiBadRequestResponse({
    //     description: 'Measurement has not been edited',
    // })
    // @Put('/edit-measurement')
    // async editMeasurement(@Body() editMeasurementRequest: EditMeasurementRequest) {
    //     return this.measurementsService.editMeasurement(editMeasurementRequest);
    // }
}
