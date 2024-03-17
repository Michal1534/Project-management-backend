import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateProductUsersRequest {
  @ApiProperty({
    description: 'productId',
    example: 1,
  })
  @IsNotEmpty()
  productId: number;

  @ApiProperty({
    description: 'userId',
    example: 1,
  })
  @IsNotEmpty()
  userId: number;

  @ApiProperty({
    description: 'weight',
    example: 1,
  })
  @IsNotEmpty()
  weight: number;
}
