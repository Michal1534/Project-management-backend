import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/services/prisma/prisma.service';
import { Vacation } from '@prisma/client';
import { CreateVacationRequest } from './request/create-vacation.request';

@Injectable()
export class VacationService {
    constructor(private readonly prismaService: PrismaService) {}

    async getAllVacations(): Promise<Vacation[]> {
        console.log('GET all vacations');
        return this.prismaService.vacation.findMany();
    }

    async getVacationsByProject(projectId: number): Promise<Vacation[]> {
        return this.prismaService.vacation.findMany({
            where: {
                project_id: projectId,
            },
            include: {
                user: true,
            },
        });
    }

    async createVacation(vacation: CreateVacationRequest): Promise<Vacation> {
        const { userId, startDate, endDate, reason, projectId } = vacation;
        const newVacation = this.prismaService.vacation.create({
            data: {
                user_id: userId,
                project_id: projectId,
                start_date: startDate,
                end_date: endDate,
                reason: reason,
            },
        });
        console.log('POST vacation successful');
        return newVacation;
    }

    async deleteVacation(id: number): Promise<Vacation> {
        const vacation = this.prismaService.vacation.delete({
            where: {
                id: id,
            },
        });
        console.log('DELETE vacation successful');
        return vacation;
    }
}
