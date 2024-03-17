import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { User } from './user/user.decorator';
import { LoginRequest, LoginResponse, SignupRequest } from './models';
import { AuthUser } from './user/auth-user';
import { UserResponse } from './user/models/response/user.response';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiCreatedResponse({
    description: 'User has been created',
  })
  @ApiBadRequestResponse({
    description: 'User has not been created',
  })
  @Post('signup')
  @HttpCode(HttpStatus.CREATED)
  async signup(@Body() signupRequest: SignupRequest): Promise<void> {
    await this.authService.signup(signupRequest);
  }

  @ApiCreatedResponse({
    description: 'User has logged in',
  })
  @ApiBadRequestResponse({
    description: 'User has not logged in',
  })
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginRequest: LoginRequest): Promise<LoginResponse> {
    return new LoginResponse(await this.authService.login(loginRequest));
  }

  @ApiResponse({
    description: 'Authenticated user information',
  })
  @ApiBearerAuth()
  @Get()
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard())
  async getUserWithToken(@User() user: AuthUser): Promise<UserResponse> {
    return UserResponse.fromUserEntity(user);
  }
}
