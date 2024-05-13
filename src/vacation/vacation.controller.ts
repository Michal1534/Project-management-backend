import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { VacationService } from './vacation.service';
import { CreateVacationRequest } from './request/create-vacation.request';

@ApiTags('vacation')
@Controller('vacation')
export class VacationController {
    constructor(private readonly vacationService: VacationService) {}

    @ApiResponse({
        description: 'Vacations',
    })
    @Get()
    async findAllVacations() {
        console.log('All vacations fetched');
        return this.vacationService.getAllVacations();
    }

    @ApiResponse({
        description: 'Users vacations from project',
    })
    @Get('project/:projectId')
    async findVacationsByProject(@Param('projectId') projectId: number) {
        console.log('Fetching vacations for project with id: ' + projectId);
        return this.vacationService.getVacationsByProject(projectId);
    }

    @ApiCreatedResponse({
        description: 'Vacation has been created',
    })
    @Post('create-vacation')
    async createVacation(@Body() createVacationRequest: CreateVacationRequest) {
        console.log('Vacation created');
        return this.vacationService.createVacation(createVacationRequest);
    }

    @Delete(':id')
    async deleteVacation(@Param('id') id: number) {
        console.log('Vacation deleted with id: ' + id);
        return this.vacationService.deleteVacation(+id);
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
