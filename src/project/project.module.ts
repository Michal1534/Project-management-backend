import { Module } from '@nestjs/common';
import { PrismaModule } from '../common/services/prisma/prisma.module';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';

@Module({
    controllers: [ProjectController],
    providers: [ProjectService],
    imports: [PrismaModule],
})
export class ProjectModule {}
