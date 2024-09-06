import type { User } from '@prisma/client';

export class UserResponse {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    specialization: string;
    role: string;

    static fromUserEntity(entity: User): UserResponse {
        const response = new UserResponse();
        response.id = entity.id;
        response.username = entity.username;
        response.first_name = entity.first_name;
        response.last_name = entity.last_name;
        response.email = entity.email;
        response.specialization = entity.specialization;
        response.role = entity.role;
        return response;
    }
}
