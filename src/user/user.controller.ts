import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserRequest } from './request/create-user.request';
import { AuthGuard } from '@nestjs/passport';
import { EditUserRequest } from './request/edit-user-request';

@ApiTags('users')
@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async findAllUsers() {
        console.log('All users fetched');
        return this.userService.getAllUsers();
    }

    @Get(':id')
    async findOneUserById(@Param('id') id: number) {
        console.log('One user fetched with id: ' + id);
        return this.userService.getOneUser(+id);
    }

    @Get('not-in-project/:id')
    async findUsersNotInProject(@Param('id') id: number) {
        console.log('Users not in project fetched with projectId ' + id);
        return this.userService.getUsersNotInProject(id);
    }

    @Post('create-user')
    async createUser(@Body() createUser: CreateUserRequest) {
        console.log('User created');
        return this.userService.createUser(createUser);
    }

    @Put(':id')
    async updateUser(@Param('id') id: number, @Body() updateUser: EditUserRequest) {
        console.log('User updated with id: ' + id);
        return this.userService.updateUser(id, updateUser);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: number) {
        console.log('User deleted with id: ' + id);
        return this.userService.deleteUser(+id);
    }

    // @Put('update-calories')
    // async updateUserCaloriesById(
    //   @Body() updateUserCalories: UpdateUserCaloriesRequest,
    // ) {
    //   console.log('User calories updated');
    //   return this.userService.updateUserCalories(updateUserCalories);
    // }
}
