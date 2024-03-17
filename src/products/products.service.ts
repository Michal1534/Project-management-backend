import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { PrismaService } from '../common/services/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllProducts(): Promise<Product[]> {
    console.log('GET all products');
    return this.prismaService.product.findMany({
      orderBy: { name: 'asc' },
    });
  }
  async getOneProduct(id: number): Promise<Product> {
    console.log('GET product successful');
    return this.prismaService.product.findUnique({ where: { id: id } });
  }

  async getManyProductsUser(id: number): Promise<Product[]> {
    const productNames = this.prismaService.product.findMany({
      where: {
        users: {
          every: {
            userId: {
              equals: id,
            },
          },
        },
      },
      select: {
        id: true,
        name: true,
        calories: true,
        protein: true,
        carbohydrate: true,
        fat: true,
      },
    });
    console.log('GET productUsers successful');
    return productNames;
  }
}
