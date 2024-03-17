import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ProductUsersService } from './product-users.service';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateProductUsersRequest } from './request/create-product-users.request';
import { ArchiveProductUsersRequest } from './request/archive-product-users.request';

@ApiTags('product-users')
@Controller('product-users')
export class ProductUsersController {
  constructor(private readonly productUsersService: ProductUsersService) {}

  @ApiCreatedResponse({
    description: 'ProductUsers has been created',
  })
  @ApiBadRequestResponse({
    description: 'ProductUsers has not been created',
  })
  @Post('/create-product-users')
  async addMeasurement(
    @Body() createProductUsersRequest: CreateProductUsersRequest,
  ) {
    this.productUsersService.createProductUsers(createProductUsersRequest);
  }

  @ApiOkResponse({
    description: 'ProductUsersDetails has been fetched',
  })
  @ApiBadRequestResponse({
    description: 'ProductUsersDetails  has not been fetched',
  })
  @Get('/details/:id')
  async findManyProductUsersDetails(@Param('id') id: number) {
    return this.productUsersService.getProductUsersDetails(+id);
  }

  @ApiOkResponse({
    description: 'ProductUsersDetails has been archived',
  })
  @ApiBadRequestResponse({
    description: 'ProductUsersDetails has not been archived',
  })
  @Put('/archive-product-users')
  async archiveProductUsers(
    @Body() deleteProductUsersRequest: ArchiveProductUsersRequest,
  ) {
    return this.productUsersService.archiveProductUsers(
      deleteProductUsersRequest,
    );
  }
}
