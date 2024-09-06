import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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
}
