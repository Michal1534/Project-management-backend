import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('health-check')
@Controller('')
export class AppController {
  @ApiResponse({
    description: 'Server status information',
  })
  @ApiOkResponse({
    description: 'Server status is OK',
  })
  @Get()
  @HttpCode(HttpStatus.OK)
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  healthCheck(): void {}
}
