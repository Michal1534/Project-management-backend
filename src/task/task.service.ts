import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/services/prisma/prisma.service';
import { Task } from '@prisma/client';
import { CreateTaskRequest } from './request/create-task.request';

@Injectable()
export class TaskService {
    constructor(private readonly prismaService: PrismaService) {}

    async getAllTasks(): Promise<Task[]> {
        console.log('GET all tasks');
        return this.prismaService.task.findMany();
    }

    async getOneTask(id: number): Promise<Task> {
        console.log('GET task successful');
        return this.prismaService.task.findUnique({
            where: { id: id },
            include: {
                assigned_user: true,
                reported_by_user: true,
            },
        });
    }

    async getSprintTasks(sprintId: number): Promise<Task[]> {
        console.log('GET task by sprintId successful');
        return this.prismaService.task.findMany({
            where: {
                sprint_id: sprintId,
            },
        });
    }

    async getUserTasks(userId: number): Promise<Task[]> {
        console.log('GET task by userId successful');
        return this.prismaService.task.findMany({
            where: {
                assigned_user_id: userId,
            },
        });
    }

    async createTask(task: CreateTaskRequest): Promise<Task> {
        const { assignedTo, createdBy, name, priority, storyPoints, type, sprintId, description, status, component } =
            task;
        const newTask = this.prismaService.task.create({
            data: {
                assigned_user_id: assignedTo || null,
                reported_by_user_id: createdBy,
                name,
                priority,
                story_points: storyPoints,
                task_type: type,
                description,
                status,
                created_at: new Date(),
                sprint_id: sprintId,
                component,
            },
        });
        return newTask;
    }

    async updateTask(id: number, updateTask: CreateTaskRequest): Promise<Task> {
        const { assignedTo, createdBy, name, priority, storyPoints, type, sprintId, description, status, component } =
            updateTask;

        console.log(assignedTo, 'test');
        const updatedTask = this.prismaService.task.update({
            where: {
                id: id,
            },
            data: {
                assigned_user_id: assignedTo,
                reported_by_user_id: createdBy,
                name,
                priority,
                story_points: storyPoints,
                task_type: type,
                description,
                status,
                sprint_id: sprintId,
                component,
            },
        });
        return updatedTask;
    }

    async deleteTask(id: number): Promise<Task> {
        const task = this.prismaService.task.delete({
            where: {
                id: id,
            },
        });
        return task;
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
