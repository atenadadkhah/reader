import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductsService {
  private take = 20;
  constructor(private prisma: PrismaService) {}

  findMany(page = 1) {
    return this.prisma.product.findMany({
      skip: (page - 1) * this.take,
      take: this.take,
    });
  }

  count() {
    return this.prisma.product.count();
  }
}
