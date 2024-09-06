import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/services/prisma/prisma.service';
import { UserProjects } from '@prisma/client';
import { CreateUserProjectsRequest } from './request/create-user-projects.request';

@Injectable()
export class UserProjectsService {
    constructor(private readonly prismaService: PrismaService) {}

    async getUserProjects(userId: number): Promise<UserProjects[]> {
        const userProjects = this.prismaService.userProjects.findMany({
            where: {
                user_id: userId,
            },
            include: {
                project: true,
            },
        });
        console.log('GET userProjects successful');
        return userProjects;
    }

    async getProjectUsers(projectId: number): Promise<{ project: any; users: any[] }> {
        const project = await this.prismaService.project.findUnique({
            where: {
                id: projectId,
            },
        });

        if (!project) {
            throw new Error('Project not found');
        }

        const projectUsers = await this.prismaService.userProjects.findMany({
            where: {
                project_id: projectId,
            },
            include: {
                user: true,
            },
        });

        const users = projectUsers.map((pu) => pu.user);

        console.log('GET projectUsers successful');
        return {
            project: project,
            users: users.length ? users : [],
        };
    }

    async createUserProject(createUserProjectRequest: CreateUserProjectsRequest): Promise<UserProjects> {
        const { userId, projectId } = createUserProjectRequest;
        const newUserProject = this.prismaService.userProjects.create({
            data: {
                project_id: projectId,
                user_id: userId,
            },
        });
        console.log('POST userProject successful');
        return newUserProject;
    }

    async createProjectUsers(createUserProjectRequest: {
        userIds: number[];
        projectId: number;
    }): Promise<UserProjects[]> {
        const { userIds, projectId } = createUserProjectRequest;
        const newProjectUsers = await Promise.all(
            userIds.map((userId) =>
                this.prismaService.userProjects.create({
                    data: {
                        project_id: projectId,
                        user_id: userId,
                    },
                })
            )
        );
        console.log('POST projectUsers successful');
        return newProjectUsers;
    }

    async removeUserProject(userId: number, projectId: number): Promise<UserProjects> {
        const userProject = this.prismaService.userProjects.delete({
            where: {
                user_id_project_id: {
                    user_id: userId,
                    project_id: projectId,
                },
            },
        });
        console.log('DELETE userProject successful');
        return userProject;
    }
}
