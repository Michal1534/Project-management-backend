import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/services/prisma/prisma.service';
import { Measurement } from '@prisma/client';
import { CreateMeasurementRequest } from './request/create-measurement.request';
import { ArchiveMeasurementRequest } from './request/archive-measurement.request';
import { EditMeasurementRequest } from './request/edit-measurement.request';

@Injectable()
export class MeasurementsService {
  constructor(private readonly prismaService: PrismaService) {}

  async getOneMeasurement(id: number): Promise<Measurement> {
    console.log('GET measurement successful');
    return this.prismaService.measurement.findUnique({
      where: { id: id },
    });
  }

  async getUserMeasurements(id: number): Promise<Measurement[]> {
    const measurement = this.prismaService.measurement.findMany({
      where: {
        userId: id,
      },
      orderBy: {
        createdOn: 'desc',
      },
    });
    console.log('GET userMeasurement successful');
    return measurement;
  }

  async createMeasurement(
    createMeasurementRequest: CreateMeasurementRequest,
  ): Promise<Measurement> {
    const { userId, weight, neck, chest, stomach, hips, biceps, calf, waist } =
      createMeasurementRequest;
    const measurement = this.prismaService.measurement.create({
      data: {
        userId,
        weight,
        neck,
        chest,
        stomach,
        hips,
        biceps,
        calf,
        waist,
      },
    });
    console.log('POST measurement successful');
    return measurement;
  }

  async archiveMeasurement(
    archiveMeasurementRequest: ArchiveMeasurementRequest,
  ): Promise<Measurement> {
    const { id, archivedOn } = archiveMeasurementRequest;
    const measurement = this.prismaService.measurement.update({
      where: {
        id: archiveMeasurementRequest.id,
      },
      data: {
        archivedOn: archiveMeasurementRequest.archivedOn,
      },
    });
    console.log('UPDATE-ARCHIVE Measurement successful');
    return measurement;
  }

  async editMeasurement(
    editMeasurementRequest: EditMeasurementRequest,
  ): Promise<Measurement> {
    const { id, weight, neck, chest, stomach, hips, biceps, calf, waist } =
      editMeasurementRequest;
    const measurement = this.prismaService.measurement.update({
      where: {
        id: editMeasurementRequest.id,
      },
      data: {
        weight: editMeasurementRequest.weight,
        neck: editMeasurementRequest.neck,
        chest: editMeasurementRequest.chest,
        stomach: editMeasurementRequest.stomach,
        hips: editMeasurementRequest.hips,
        biceps: editMeasurementRequest.biceps,
        calf: editMeasurementRequest.calf,
        waist: editMeasurementRequest.waist,
      },
    });
    console.log('UPDATE Measurement successful');
    return measurement;
  }
}
