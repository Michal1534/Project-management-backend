import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProjectService } from './project.service';
import { CreateProjectRequest } from './request/create-project.request';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('project')
@Controller('project')
export class ProjectController {
    constructor(private readonly projectService: ProjectService) {}

    @ApiResponse({
        description: 'Projects',
    })
    @ApiBearerAuth()
    @Get()
    @UseGuards(AuthGuard('jwt'))
    async findAllProjects() {
        console.log('All projects fetched');
        return this.projectService.getAllProjects();
    }

    @ApiResponse({
        description: 'Project',
    })
    @Get(':id')
    async findOneProjectById(@Param('id') id: number) {
        console.log('One project fetched with id: ' + id);
        return this.projectService.getOneProject(+id);
    }

    @ApiCreatedResponse({
        description: 'Project has been created',
    })
    @Post('/create-project')
    async addProject(@Body() createProjectRequest: CreateProjectRequest) {
        this.projectService.createProject(createProjectRequest);
    }

    @Put(':id')
    async updateProject(@Param('id') id: number, @Body() updateProject: CreateProjectRequest) {
        console.log('Project updated with id: ' + id);
        return this.projectService.updateProject(id, updateProject);
    }

    @Delete(':id')
    async deleteProject(@Param('id') id: number) {
        console.log('Project deleted with id: ' + id);
        return this.projectService.deleteProject(+id);
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
