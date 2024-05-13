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

    async updateUserProject(id: number, updateUserProjectRequest: CreateUserProjectsRequest): Promise<UserProjects> {
        const { userId, projectId } = updateUserProjectRequest;
        const updateUserProject = this.prismaService.userProjects.update({
            where: {
                id: id,
            },
            data: {
                project_id: projectId,
                user_id: userId,
            },
        });
        console.log('PUT userProject successful');
        return updateUserProject;
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
