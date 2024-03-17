import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { UpdateUserCaloriesRequest } from './request/update-user-calories.request';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  async findOneUserById(@Param('id') id: number) {
    console.log('One user fetched with id: ' + id);
    return this.userService.getOneUser(+id);
  }

  @Put('update-calories')
  async updateUserCaloriesById(
    @Body() updateUserCalories: UpdateUserCaloriesRequest,
  ) {
    console.log('User calories updated');
    return this.userService.updateUserCalories(updateUserCalories);
  }
}
