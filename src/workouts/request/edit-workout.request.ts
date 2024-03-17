import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class EditWorkoutRequest {
  @ApiProperty({
    description: 'measurementId',
    example: 1,
  })
  @IsNotEmpty()
  id: number;

  @ApiProperty({
    description: 'name',
    example: 'Split',
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'exercises',
    example: ['dumbbell press', 'squat'],
  })
  @IsNotEmpty()
  exercises: string[];
}
