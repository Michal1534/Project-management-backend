import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/services/prisma/prisma.service';
import { Recipe } from '@prisma/client';

@Injectable()
export class RecipesService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllRecipes(): Promise<Recipe[]> {
    console.log('GET all recipes');
    return this.prismaService.recipe.findMany();
  }

  async getOneRecipe(id: number): Promise<Recipe> {
    console.log('GET recipe with id ' + id);
    return this.prismaService.recipe.findUnique({ where: { id: id } });
  }
}
