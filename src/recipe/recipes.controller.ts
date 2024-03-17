import { Controller, Get, Param } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('recipes')
@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Get()
  async findAllRecipes() {
    console.log('All recipes fetched');
    return this.recipesService.getAllRecipes();
  }

  @Get(':id')
  async findOneRecipeById(@Param('id') id: string) {
    console.log('One recipe fetched with id: ' + id);
    return this.recipesService.getOneRecipe(+id);
  }
}
