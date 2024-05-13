import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserRequest {
    @ApiProperty({
        description: 'first_name',
        example: 'John',
    })
    @IsNotEmpty()
    firstName: string;

    @ApiProperty({
        description: 'last_name',
        example: 'Doe',
    })
    @IsNotEmpty()
    lastName: string;

    @ApiProperty({
        description: 'email',
        example: '',
    })
    @IsNotEmpty()
    email: string;

    @ApiProperty({
        description: 'password',
        example: '',
    })
    @IsNotEmpty()
    password: string;

    @ApiProperty({
        description: 'role',
        example: 'user',
    })
    @IsNotEmpty()
    role: string;

    @ApiProperty({
        description: 'username',
        example: 'johndoe',
    })
    @IsNotEmpty()
    username: string;

    @ApiProperty({
        description: 'position',
        example: 'developer',
    })
    @IsNotEmpty()
    position: string;

    @ApiProperty({
        description: 'availability',
        example: true,
    })
    @IsNotEmpty()
    availability: boolean;

    @ApiProperty({
        description: 'workload',
        example: 0,
    })
    @IsNotEmpty()
    workload: number;
}
