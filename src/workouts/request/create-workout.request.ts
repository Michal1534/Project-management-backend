import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateWorkoutRequest {
  @ApiProperty({
    description: 'userId',
    example: 1,
  })
  @IsNotEmpty()
  userId: number;

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
