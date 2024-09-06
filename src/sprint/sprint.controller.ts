import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SprintService } from './sprint.service';
import { CreateSprintRequest } from './request/create-sprint.request';
import { EditSprintRequest } from './request/edit-sprint.request';

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
    async updateSprint(@Param('id') id: number, @Body() updateSprint: EditSprintRequest) {
        console.log('Sprint updated with id: ' + id);
        return this.sprintService.updateSprint(id, updateSprint);
    }

    @Delete(':id')
    async deleteSprint(@Param('id') id: number) {
        console.log('Sprint deleted with id: ' + id);
        return this.sprintService.deleteSprint(+id);
    }
}
