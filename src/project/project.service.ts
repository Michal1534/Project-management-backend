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
