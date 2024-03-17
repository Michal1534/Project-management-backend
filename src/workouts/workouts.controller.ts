import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { WorkoutsService } from './workouts.service';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateWorkoutRequest } from './request/create-workout.request';
import { ArchiveWorkoutRequest } from './request/archive-workout.request';
import { EditWorkoutRequest } from './request/edit-workout.request';

@ApiTags('workouts')
@Controller('workouts')
export class WorkoutsController {
  constructor(private readonly workoutsService: WorkoutsService) {}

  @Get()
  async findAllWorkouts() {
    console.log('All workouts fetched');
    return this.workoutsService.getAllWorkouts();
  }

  @Get('/user/:id')
  async findAllUserWorkouts(@Param('id') id: number) {
    console.log('All user ' + id + ' workouts fetched');
    return this.workoutsService.getAllUserWorkouts(+id);
  }

  @Get(':id')
  async findOneWorkoutById(@Param('id') id: number) {
    console.log('One workout fetched with id: ' + id);
    return this.workoutsService.getOneWorkout(+id);
  }

  @ApiCreatedResponse({
    description: 'Workout has been created',
  })
  @ApiBadRequestResponse({
    description: 'Workout has not been created',
  })
  @Post('/create-workout')
  async addMeasurement(@Body() createWorkoutRequest: CreateWorkoutRequest) {
    this.workoutsService.createWorkout(createWorkoutRequest);
  }

  @ApiOkResponse({
    description: 'Workout has been archived',
  })
  @ApiBadRequestResponse({
    description: 'Workout has not been archived',
  })
  @Put('/archive-workout')
  async archiveWorkout(@Body() archiveWorkoutRequest: ArchiveWorkoutRequest) {
    return this.workoutsService.archiveWorkout(archiveWorkoutRequest);
  }

  @ApiOkResponse({
    description: 'Workout has been edited',
  })
  @ApiBadRequestResponse({
    description: 'Workout has not been edited',
  })
  @Put('/edit-workout')
  async editWorkout(@Body() editWorkoutRequest: EditWorkoutRequest) {
    return this.workoutsService.editWorkout(editWorkoutRequest);
  }
}
