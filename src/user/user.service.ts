import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/services/prisma/prisma.service';
import { User } from '@prisma/client';
import { CreateUserRequest } from './request/create-user.request';

@Injectable()
export class UserService {
    constructor(private readonly prismaService: PrismaService) {}

    async getAllUsers(): Promise<User[]> {
        console.log('GET all users');
        return this.prismaService.user.findMany();
    }

    async getOneUser(id: number): Promise<User> {
        console.log('GET user succesfull');
        return this.prismaService.user.findUnique({ where: { id: id } });
    }

    async createUser(createUserRequest: CreateUserRequest): Promise<User> {
        console.log('Test', createUserRequest);
        const { firstName, lastName, email, password, role, username, position } = createUserRequest;
        const newUser = this.prismaService.user.create({
            data: {
                first_name: firstName,
                last_name: lastName,
                availability: true,
                workload: 0,
                email,
                password,
                role,
                username,
                position,
            },
        });
        console.log('POST user successful');
        return newUser;
    }

    async updateUser(id: number, updateUserRequest: CreateUserRequest): Promise<User> {
        const { firstName, lastName, email, password, role, username, position } = updateUserRequest;
        const updateUser = this.prismaService.user.update({
            where: {
                id: id,
            },
            data: {
                first_name: firstName,
                last_name: lastName,
                email,
                password,
                role,
                username,
                position,
            },
        });
        console.log('PUT user successful');
        return updateUser;
    }

    async deleteUser(id: number): Promise<User> {
        const user = this.prismaService.user.delete({
            where: {
                id: id,
            },
        });
        console.log('DELETE user successful');
        return user;
    }

    // async updateUserCalories(
    //   updateUserCaloriesRequest: UpdateUserCaloriesRequest,
    // ): Promise<User> {
    //   const { id, calories } = updateUserCaloriesRequest;
    //   const updateUserCalories = this.prismaService.user.update({
    //     where: { id: id },
    //     data: { calories: calories },
    //   });
    //   console.log('PUT userCalories successful');
    //   return updateUserCalories;
    // }
}
