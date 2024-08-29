import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/services/prisma/prisma.service';
import { Comment } from '@prisma/client';
import { CreateCommentRequest } from './request/create-comment.request';

@Injectable()
export class CommentService {
    constructor(private readonly prismaService: PrismaService) {}

    async getTaskComments(taskId: number): Promise<Comment[]> {
        console.log('GET all comments');
        return this.prismaService.comment.findMany({
            where: {
                task_id: taskId,
            },
            include: {
                user: true,
            },
            orderBy: {
                timestamp: 'desc',
            },
        });
    }

    async getOneComment(id: number): Promise<Comment> {
        console.log('GET comment successful');
        return this.prismaService.comment.findUnique({
            where: { id: id },
        });
    }

    async createComment(comment: CreateCommentRequest): Promise<Comment> {
        console.log('POST comment successful');
        return this.prismaService.comment.create({
            data: {
                comment_content: comment.comment_content,
                user_id: comment.userId,
                timestamp: comment.commentDate,
                task_id: comment.taskId,
            },
        });
    }

    async updateComment(id: number, comment: CreateCommentRequest): Promise<Comment> {
        console.log('PUT comment successful');
        return this.prismaService.comment.update({
            where: {
                id: id,
            },
            data: {
                comment_content: comment.comment_content,
                user_id: comment.userId,
                timestamp: comment.commentDate,
                task_id: comment.taskId,
            },
        });
    }

    async deleteComment(id: number): Promise<Comment> {
        console.log('DELETE comment successful');
        return this.prismaService.comment.delete({
            where: {
                id: id,
            },
        });
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
