import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TaskService } from './task.service';
import { CreateTaskRequest } from './request/create-task.request';

@ApiTags('task')
@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    @ApiResponse({
        description: 'Tasks',
    })
    @Get()
    async findAllTasks() {
        console.log('All tasks fetched');
        return this.taskService.getAllTasks();
    }

    @ApiResponse({
        description: 'Task',
    })
    @Get(':id')
    async findOneTaskById(@Param('id') id: number) {
        console.log('One task fetched with id: ' + id);
        return this.taskService.getOneTask(+id);
    }

    @ApiResponse({
        description: 'Task from sprint',
    })
    @Get('sprint/:id')
    async findSprintTasks(@Param('id') id: number) {
        console.log('Tasks fetched with sprintId ' + id);
        return this.taskService.getSprintTasks(+id);
    }

    @ApiResponse({
        description: 'Task from user',
    })
    @Get('user/:id')
    async findUserTasks(@Param('id') id: number) {
        console.log('Tasks fetched with userId ' + id);
        return this.taskService.getUserTasks(+id);
    }

    @ApiCreatedResponse({
        description: 'Task has been created',
    })
    @Post('/create-task')
    async addTask(@Body() createTaskRequest: CreateTaskRequest) {
        this.taskService.createTask(createTaskRequest);
    }

    @Delete(':id')
    async deleteTask(@Param('id') id: number) {
        console.log('Task deleted with id: ' + id);
        return this.taskService.deleteTask(+id);
    }

    @Put(':id')
    async updateTask(@Param('id') id: number, @Body() updateTask: CreateTaskRequest) {
        console.log('Task updated with id: ' + id);
        return this.taskService.updateTask(id, updateTask);
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
