import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { tr } from '@faker-js/faker';

@Injectable()
export class UsersService {
  private take = 24;
  constructor(private prisma: PrismaService) {}

  findOne(id: number) {
    return this.prisma.user.findFirst({
      where: { id },
      include: {
        profile: true,
        posts: {
          include: {
            categories: {
              include: {
                category: true,
              },
            },
          },
        },
      },
    });
  }

  findMany(page = 1) {
    return this.prisma.user.findMany({
      skip: (page - 1) * this.take,
      take: this.take,
      include: {
        posts: true,
        profile: true,
      },
    });
  }

  count() {
    return this.prisma.user.count();
  }
}
