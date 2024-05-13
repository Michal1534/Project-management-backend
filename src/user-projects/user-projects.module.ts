import { Module } from '@nestjs/common';
import { PrismaModule } from '../common/services/prisma/prisma.module';
import { UserProjectsService } from './user-projects.service';
import { UserProjectsController } from './user-projects.controller';

@Module({
    controllers: [UserProjectsController],
    providers: [UserProjectsService],
    imports: [PrismaModule],
})
export class UserProjectsModule {}
