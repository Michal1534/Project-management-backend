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
}
