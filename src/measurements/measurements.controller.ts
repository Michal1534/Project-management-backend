import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { MeasurementsService } from './measurements.service';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateMeasurementRequest } from './request/create-measurement.request';
import { Measurement } from '@prisma/client';
import { ArchiveMeasurementRequest } from './request/archive-measurement.request';
import { EditMeasurementRequest } from './request/edit-measurement.request';

@ApiTags('measurements')
@Controller('measurements')
export class MeasurementsController {
  constructor(private readonly measurementsService: MeasurementsService) {}

  @ApiResponse({
    description: 'Measurement',
  })
  @Get(':id')
  async findOneMeasurementById(@Param('id') id: number) {
    console.log('One measurement fetched with id: ' + id);
    return this.measurementsService.getOneMeasurement(+id);
  }

  @ApiResponse({
    description: 'User measurements',
  })
  @Get('user/:id')
  async findUserMeasurements(@Param('id') id: number): Promise<Measurement[]> {
    console.log('User measurements fetched with userId ' + id);
    return this.measurementsService.getUserMeasurements(id);
  }

  @ApiCreatedResponse({
    description: 'Measurement has been created',
  })
  @ApiBadRequestResponse({
    description: 'Measurement has not been created',
  })
  @Post('/create-measurement')
  async addMeasurement(
    @Body() createMeasurementRequest: CreateMeasurementRequest,
  ) {
    this.measurementsService.createMeasurement(createMeasurementRequest);
  }

  @ApiOkResponse({
    description: 'Measurement has been archived',
  })
  @ApiBadRequestResponse({
    description: 'Measurement has not been archived',
  })
  @Put('/archive-measurement')
  async archiveMeasurement(
    @Body() archiveMeasurementRequest: ArchiveMeasurementRequest,
  ) {
    return this.measurementsService.archiveMeasurement(
      archiveMeasurementRequest,
    );
  }

  @ApiOkResponse({
    description: 'Measurement has edited',
  })
  @ApiBadRequestResponse({
    description: 'Measurement has not been edited',
  })
  @Put('/edit-measurement')
  async editMeasurement(
    @Body() editMeasurementRequest: EditMeasurementRequest,
  ) {
    return this.measurementsService.editMeasurement(editMeasurementRequest);
  }
}
