import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ArchiveWorkoutRequest {
  @ApiProperty({
    description: 'workoutId',
    example: 1,
  })
  @IsNotEmpty()
  id: number;

  @ApiProperty({
    description: 'Date',
    example: new Date(),
  })
  @IsNotEmpty()
  archivedOn: Date;
}
