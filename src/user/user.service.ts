import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/services/prisma/prisma.service';
import { User } from '@prisma/client';
import { UpdateUserCaloriesRequest } from './request/update-user-calories.request';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}
  async getOneUser(id: number): Promise<User> {
    console.log('GET user succesfull');
    return this.prismaService.user.findUnique({ where: { id: id } });
  }

  async updateUserCalories(
    updateUserCaloriesRequest: UpdateUserCaloriesRequest,
  ): Promise<User> {
    const { id, calories } = updateUserCaloriesRequest;
    const updateUserCalories = this.prismaService.user.update({
      where: { id: id },
      data: { calories: calories },
    });
    console.log('PUT userCalories successful');
    return updateUserCalories;
  }
}
