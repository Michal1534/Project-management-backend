import { Module } from '@nestjs/common';
import { ProductUsersService } from './product-users.service';
import { ProductUsersController } from './product-users.controller';
import { PrismaModule } from '../common/services/prisma/prisma.module';

@Module({
  controllers: [ProductUsersController],
  providers: [ProductUsersService],
  imports: [PrismaModule],
})
export class ProductUsersModule {}
