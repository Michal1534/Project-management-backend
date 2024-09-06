import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/services/prisma/prisma.service';
import { Project } from '@prisma/client';
import { CreateProjectRequest } from './request/create-project.request';

@Injectable()
export class ProjectService {
    constructor(private readonly prismaService: PrismaService) {}

    async getAllProjects(): Promise<Project[]> {
        console.log('GET all projects');
        const projects = await this.prismaService.project.findMany({
            include: {
                project_users: true,
            },
        });
        return projects.map((project) => ({
            ...project,
            userCount: project.project_users.length,
        }));
    }

    async getOneProject(id: number): Promise<Project> {
        console.log('GET project successful');
        return this.prismaService.project.findUnique({
            where: { id: id },
        });
    }

    async createProject(project: CreateProjectRequest): Promise<Project> {
        const { name } = project;
        const newProject = this.prismaService.project.create({
            data: {
                name,
            },
        });
        return newProject;
    }

    async updateProject(id: number, updateProject: { name: string }): Promise<Project> {
        const { name } = updateProject;
        const updatedProject = this.prismaService.project.update({
            where: {
                id: id,
            },
            data: {
                name,
            },
        });
        return updatedProject;
    }

    async deleteProject(id: number): Promise<Project> {
        await this.prismaService.userProjects.deleteMany({
            where: {
                project_id: id,
            },
        });
        const project = this.prismaService.project.delete({
            where: {
                id: id,
            },
        });
        return project;
    }
}
