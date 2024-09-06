import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/services/prisma/prisma.service';
import { Sprint } from '@prisma/client';
import { CreateSprintRequest } from './request/create-sprint.request';
import { EditSprintRequest } from './request/edit-sprint.request';

@Injectable()
export class SprintService {
    constructor(private readonly prismaService: PrismaService) {}

    async getProjectSprints(projectId: number): Promise<Sprint[]> {
        return this.prismaService.sprint.findMany({
            where: {
                project_id: projectId,
            },
            include: {
                tasks: {
                    include: {
                        assigned_user: true,
                    },
                },
            },
            orderBy: {
                id: 'asc',
            },
        });
    }

    async getProjectSprint(projectId: number, sprintId: number): Promise<Sprint> {
        console.log('GET sprint by id successful');
        return this.prismaService.sprint.findFirst({
            where: {
                id: sprintId,
                project_id: projectId,
            },
            include: {
                tasks: {
                    include: {
                        assigned_user: true,
                    },
                },
            },
        });
    }

    async createSprint(sprint: CreateSprintRequest): Promise<Sprint> {
        const { name, startDate, endDate, projectId, status } = sprint;
        const newSprint = this.prismaService.sprint.create({
            data: {
                name,
                start_date: startDate || null,
                end_date: endDate || null,
                project_id: projectId,
                status,
            },
        });
        return newSprint;
    }

    async updateSprint(id: number, updateSprint: EditSprintRequest): Promise<Sprint> {
        const { name, startDate, endDate, projectId, status } = updateSprint;
        const updatedSprint = this.prismaService.sprint.update({
            where: {
                id: id,
            },
            data: {
                name,
                start_date: startDate,
                end_date: endDate,
                project_id: projectId,
                status,
            },
        });
        return updatedSprint;
    }

    async deleteSprint(id: number): Promise<Sprint> {
        const sprint = this.prismaService.sprint.delete({
            where: {
                id: id,
            },
        });
        return sprint;
    }
}
