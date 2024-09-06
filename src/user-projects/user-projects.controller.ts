import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserProjectsService } from './user-projects.service';
import { CreateUserProjectsRequest } from './request/create-user-projects.request';

@ApiTags('user-projects')
@Controller('user-projects')
export class UserProjectsController {
    constructor(private readonly userProjectsService: UserProjectsService) {}

    @ApiResponse({
        description: 'User projects',
    })
    @Get('projects/:id')
    async findUserProjects(@Param('id') id: number) {
        console.log('User projects fetched with projectId ' + id);
        return this.userProjectsService.getUserProjects(id);
    }

    @ApiResponse({
        description: 'Project users',
    })
    @Get('users/:id')
    async findProjectUsers(@Param('id') id: number) {
        console.log('Project users fetched with userId ' + id);
        return this.userProjectsService.getProjectUsers(id);
    }

    @ApiCreatedResponse({
        description: 'User project has been created',
    })
    @Post('create-user-project')
    async createUserProject(@Body() createUserProjectRequest: CreateUserProjectsRequest) {
        console.log('User project created');
        return this.userProjectsService.createUserProject(createUserProjectRequest);
    }

    @ApiCreatedResponse({
        description: 'Users projects have been created',
    })
    @Post('create-project-users')
    async createProjectUsers(@Body() createUserProjectRequest: { userIds: number[]; projectId: number }) {
        console.log('Users projects created');
        return this.userProjectsService.createProjectUsers(createUserProjectRequest);
    }

    @ApiResponse({
        description: 'Remove user from project',
    })
    @Delete(':userId/:projectId')
    async removeUserProject(@Param('userId') userId: number, @Param('projectId') projectId: number) {
        console.log('User project removed');
        return this.userProjectsService.removeUserProject(userId, projectId);
    }
}
