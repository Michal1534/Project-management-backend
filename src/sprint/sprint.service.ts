import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/services/prisma/prisma.service';
import { Sprint } from '@prisma/client';
import { CreateSprintRequest } from './request/create-sprint.request';
import { EditSprintRequest } from './request/edit-sprint.request';

@Injectable()
export class SprintService {
    constructor(private readonly prismaService: PrismaService) {}

    async getProjectSprints(projectId: number): Promise<Sprint[]> {
        console.log('GET all sprints');
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
        console.log(startDate, endDate);
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

    //   async getOneMeasurement(id: number): Promise<Measurement> {
    //     console.log('GET measurement successful');
    //     return this.prismaService.measurement.findUnique({
    //       where: { id: id },
    //     });
    //   }

    //   async getUserMeasurements(id: number): Promise<Measurement[]> {
    //     const measurement = this.prismaService.measurement.findMany({
    //       where: {
    //         userId: id,
    //       },
    //       orderBy: {
    //         createdOn: 'desc',
    //       },
    //     });
    //     console.log('GET userMeasurement successful');
    //     return measurement;
    //   }

    //   async createMeasurement(
    //     createMeasurementRequest: CreateMeasurementRequest,
    //   ): Promise<Measurement> {
    //     const { userId, weight, neck, chest, stomach, hips, biceps, calf, waist } =
    //       createMeasurementRequest;
    //     const measurement = this.prismaService.measurement.create({
    //       data: {
    //         userId,
    //         weight,
    //         neck,
    //         chest,
    //         stomach,
    //         hips,
    //         biceps,
    //         calf,
    //         waist,
    //       },
    //     });
    //     console.log('POST measurement successful');
    //     return measurement;
    //   }

    //   async archiveMeasurement(
    //     archiveMeasurementRequest: ArchiveMeasurementRequest,
    //   ): Promise<Measurement> {
    //     const { id, archivedOn } = archiveMeasurementRequest;
    //     const measurement = this.prismaService.measurement.update({
    //       where: {
    //         id: archiveMeasurementRequest.id,
    //       },
    //       data: {
    //         archivedOn: archiveMeasurementRequest.archivedOn,
    //       },
    //     });
    //     console.log('UPDATE-ARCHIVE Measurement successful');
    //     return measurement;
    //   }

    //   async editMeasurement(
    //     editMeasurementRequest: EditMeasurementRequest,
    //   ): Promise<Measurement> {
    //     const { id, weight, neck, chest, stomach, hips, biceps, calf, waist } =
    //       editMeasurementRequest;
    //     const measurement = this.prismaService.measurement.update({
    //       where: {
    //         id: editMeasurementRequest.id,
    //       },
    //       data: {
    //         weight: editMeasurementRequest.weight,
    //         neck: editMeasurementRequest.neck,
    //         chest: editMeasurementRequest.chest,
    //         stomach: editMeasurementRequest.stomach,
    //         hips: editMeasurementRequest.hips,
    //         biceps: editMeasurementRequest.biceps,
    //         calf: editMeasurementRequest.calf,
    //         waist: editMeasurementRequest.waist,
    //       },
    //     });
    //     console.log('UPDATE Measurement successful');
    //     return measurement;
    //   }
}
