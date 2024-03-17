import type { User } from '@prisma/client';

export class UserResponse {
  id: number;
  username: string;
  age: number;
  height: number;
  gender: string;
  goal: string;
  lifestyle: string;
  calories: number;

  static fromUserEntity(entity: User): UserResponse {
    const response = new UserResponse();
    response.id = entity.id;
    response.username = entity.username;
    response.age = entity.age;
    response.height = entity.height;
    response.gender = entity.gender;
    response.goal = entity.goal;
    response.lifestyle = entity.lifestyle;
    response.calories = entity.calories;
    return response;
  }
}
