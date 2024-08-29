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
