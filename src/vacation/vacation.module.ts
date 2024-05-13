import { Module } from '@nestjs/common';
import { PrismaModule } from '../common/services/prisma/prisma.module';
import { VacationService } from './vacation.service';
import { VacationController } from './vacation.controller';

@Module({
    controllers: [VacationController],
    providers: [VacationService],
    imports: [PrismaModule],
})
export class VacationModule {}
