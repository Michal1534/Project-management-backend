import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class EditMeasurementRequest {
  @ApiProperty({
    description: 'measurementId',
    example: 1,
  })
  @IsNotEmpty()
  id: number;

  @ApiProperty({
    description: 'weight',
    example: 100,
  })
  @IsNotEmpty()
  weight: number;

  @ApiProperty({
    description: 'neck',
    example: 40,
  })
  @IsNotEmpty()
  neck: number;

  @ApiProperty({
    description: 'chest',
    example: 106,
  })
  @IsNotEmpty()
  chest: number;

  @ApiProperty({
    description: 'stomach',
    example: 100,
  })
  @IsNotEmpty()
  stomach: number;
  @ApiProperty({
    description: 'hips',
    example: 100,
  })
  @IsNotEmpty()
  hips: number;

  @ApiProperty({
    description: 'biceps',
    example: 100,
  })
  @IsNotEmpty()
  biceps: number;

  @ApiProperty({
    description: 'calf',
    example: 100,
  })
  @IsNotEmpty()
  calf: number;

  @ApiProperty({
    description: 'waist',
    example: 100,
  })
  @IsNotEmpty()
  waist: number;
}
