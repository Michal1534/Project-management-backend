import { Module } from '@nestjs/common';
import { MeasurementsService } from './measurements.service';
import { MeasurementsController } from './measurements.controller';
import { PrismaModule } from '../common/services/prisma/prisma.module';

@Module({
  controllers: [MeasurementsController],
  providers: [MeasurementsService],
  imports: [PrismaModule],
})
export class MeasurementsModule {}
