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
}
