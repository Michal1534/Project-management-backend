import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UpdateUserCaloriesRequest {
  @ApiProperty({
    description: 'id',
    example: 1,
  })
  @IsNotEmpty()
  id: number;

  @ApiProperty({
    description: 'calories',
    example: 1,
  })
  @IsNotEmpty()
  calories: number;
}
