import { Module } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { RecipesController } from './recipes.controller';
import { PrismaModule } from '../common/services/prisma/prisma.module';

@Module({
  controllers: [RecipesController],
  providers: [RecipesService],
  imports: [PrismaModule],
})
export class RecipesModule {}
