import { IsNotEmpty, Matches, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SignupRequest {
  @ApiProperty({
    description: 'Username - max length 20 letters',
    example: 'username',
  })
  @IsNotEmpty()
  @Matches(RegExp('^[a-zA-Z0-9\\-]+$'))
  @MaxLength(20)
  username: string;

  @ApiProperty({
    description: 'Password - min length 8 letters',
    example: 'password',
  })
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @ApiProperty({
    description: 'Gender - male/female',
    example: 'male',
  })
  @IsNotEmpty()
  gender: string;

  @ApiProperty({
    description: 'Age',
    example: 18,
  })
  @IsNotEmpty()
  age: number;

  @ApiProperty({
    description: 'Height',
    example: 180,
  })
  @IsNotEmpty()
  height: number;

  @ApiProperty({
    description: 'Goal',
    example: 'Lose',
  })
  @IsNotEmpty()
  goal: string;

  @ApiProperty({
    description: 'Lifestyle',
    example: 'Lightly Active',
  })
  @IsNotEmpty()
  lifestyle: string;

  @ApiProperty({
    description: 'Calories',
    example: 0,
  })
  calories: number;
}
