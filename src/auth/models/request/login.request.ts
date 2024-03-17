import { IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginRequest {
  @ApiProperty({
    description: 'Username - max length 20 letters',
    example: 'username',
  })
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    description: 'Password - min length 8 letters',
    example: 'password',
  })
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
