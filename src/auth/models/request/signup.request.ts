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
        description: 'Password - min length 5 letters',
        example: 'password',
    })
    @IsNotEmpty()
    @MinLength(5)
    password: string;

    @ApiProperty({
        description: 'First name - max length 20 letters',
        example: 'first_name',
    })
    @IsNotEmpty()
    @MaxLength(20)
    firstName: string;

    @ApiProperty({
        description: 'Last name - max length 20 letters',
        example: 'last_name',
    })
    @IsNotEmpty()
    @MaxLength(20)
    lastName: string;

    @ApiProperty({
        description: 'Email - max length 50 letters',
        example: 'email',
    })
    @IsNotEmpty()
    @MaxLength(50)
    email: string;

    @ApiProperty({
        description: 'Position - max length 20 letters',
        example: 'position',
    })
    @IsNotEmpty()
    @MaxLength(20)
    position: string;

    @ApiProperty({
        description: 'Role - max length 20 letters',
        example: 'role',
    })
    @IsNotEmpty()
    @MaxLength(20)
    role: string;

    @ApiProperty({
        description: 'expirience',
        example: 'Junior',
    })
    @IsNotEmpty()
    expirience: string;

    @ApiProperty({
        description: 'workload',
        example: 0,
    })
    @IsNotEmpty()
    workload: number;
}
