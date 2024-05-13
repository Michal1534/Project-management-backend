import { Module } from '@nestjs/common';
import { PrismaModule } from '../common/services/prisma/prisma.module';
import { SprintService } from './sprint.service';
import { SprintController } from './sprint.controller';

@Module({
    controllers: [SprintController],
    providers: [SprintService],
    imports: [PrismaModule],
})
export class SprintModule {}
