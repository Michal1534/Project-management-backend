import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class GetProductUsersRequest {
  @ApiProperty({
    description: 'userId',
    example: 1,
  })
  @IsNotEmpty()
  userId: number;
}
