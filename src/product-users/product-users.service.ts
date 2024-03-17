import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/services/prisma/prisma.service';
import { CreateProductUsersRequest } from './request/create-product-users.request';
import { ProductUsers } from '@prisma/client';
import { ArchiveProductUsersRequest } from './request/archive-product-users.request';

@Injectable()
export class ProductUsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async createProductUsers(
    createProductUsersRequest: CreateProductUsersRequest,
  ): Promise<ProductUsers> {
    const { userId, productId, weight } = createProductUsersRequest;
    const productUsers = this.prismaService.productUsers.create({
      data: {
        userId: userId,
        productId: productId,
        weight: weight,
      },
    });
    console.log('POST productUsers successful');
    return productUsers;
  }

  async getProductUsersDetails(id: number): Promise<ProductUsers[]> {
    const productUsers = this.prismaService.productUsers.findMany({
      where: {
        userId: id,
      },
      include: {
        product: true,
      },
    });
    console.log('GET productUsers successful');
    return productUsers;
  }

  async archiveProductUsers(
    archiveProductUsersRequest: ArchiveProductUsersRequest,
  ): Promise<ProductUsers> {
    const { id, archivedOn } = archiveProductUsersRequest;
    const productUsers = this.prismaService.productUsers.update({
      where: {
        id: id,
      },
      data: {
        archivedOn: archivedOn,
      },
    });
    console.log('UPDATE-ARCHIVE productUsers successful');
    return productUsers;
  }
}
