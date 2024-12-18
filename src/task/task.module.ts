import { Module } from '@nestjs/common';
import { PrismaModule } from '../common/services/prisma/prisma.module';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';

@Module({
    controllers: [TaskController],
    providers: [TaskService],
    imports: [PrismaModule],
})
export class TaskModule {}
