import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ArchiveProductUsersRequest {
  @ApiProperty({
    description: 'productUserId',
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
