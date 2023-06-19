import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PostsService {
  private includeRelations = {
    author: {
      include: {
        profile: true,
      },
    },
    categories: {
      include: {
        category: true,
      },
    },
  };
  private take = 10;

  constructor(private prisma: PrismaService) {}

  findOne(filter = {}) {
    return this.prisma.post.findFirst({
      where: filter,
      orderBy: { createdAt: 'desc' },
      include: this.includeRelations,
    });
  }

  findMany(filter = {}, page = 1) {
    return this.prisma.post.findMany({
      orderBy: { createdAt: 'desc' },
      where: filter,
      include: this.includeRelations,
      skip: (page - 1) * this.take,
      take: this.take,
    });
  }

  findMostViewed() {
    return this.prisma.post.findMany({
      orderBy: { views: 'desc' },
      take: 3,
    });
  }

  count(filter = {}) {
    return this.prisma.post.count({
      where: filter,
    });
  }
}
