import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SprintService } from './sprint.service';
import { CreateSprintRequest } from './request/create-sprint.request';

@ApiTags('sprint')
@Controller('sprint')
export class SprintController {
    constructor(private readonly sprintService: SprintService) {}

    @ApiResponse({
        description: 'Sprints from project',
    })
    @Get('project/:id')
    async findProjectSprints(@Param('id') id: number) {
        console.log('Sprints fetched with projectId ' + id);
        return this.sprintService.getProjectSprints(+id);
    }

    @ApiResponse({
        description: 'One Sprint from project',
    })
    @Get('project/:projectId/:id')
    async findProjectSprint(@Param('projectId') projectId: number, @Param('id') id: number) {
        console.log('One sprint fetched with projectId ' + projectId + ' and sprintId ' + id);
        return this.sprintService.getProjectSprint(+projectId, +id);
    }

    @ApiCreatedResponse({
        description: 'Sprint has been created',
    })
    @Post('/create-sprint')
    async addSprint(@Body() createSprintRequest: CreateSprintRequest) {
        this.sprintService.createSprint(createSprintRequest);
    }

    @Put(':id')
    async updateSprint(@Param('id') id: number, @Body() updateSprint: CreateSprintRequest) {
        console.log('Sprint updated with id: ' + id);
        return this.sprintService.updateSprint(id, updateSprint);
    }

    @Delete(':id')
    async deleteSprint(@Param('id') id: number) {
        console.log('Sprint deleted with id: ' + id);
        return this.sprintService.deleteSprint(+id);
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
