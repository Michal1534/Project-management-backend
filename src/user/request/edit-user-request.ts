import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class EditUserRequest {
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
        description: 'specialization',
        example: 'developer',
    })
    @IsNotEmpty()
    specialization: string;

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
