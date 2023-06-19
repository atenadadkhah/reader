import { Controller, Get, Param, Query } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get('/latest')
  findLatestPost() {
    return this.postsService.findOne();
  }

  @Get('/editorsPick')
  findEditorsPickPost() {
    return this.postsService.findOne({ editorsPick: true });
  }

  @Get('/mostViewed')
  findMostViewedPost() {
    return this.postsService.findMostViewed();
  }

  @Get('/:slug')
  findPost(@Param('slug') slug: string) {
    return this.postsService.findOne({ slug });
  }

  @Get()
  async findPosts(
    @Query('page') page?: number,
    @Query('search') search?: string,
  ) {
    const filter = {
      title: {
        contains: search,
      },
    };

    return {
      count: await this.postsService.count(filter),
      result: await this.postsService.findMany(filter, page),
    };
  }

  @Get('/category/:category')
  async findPostsByCategory(
    @Param('category') category: string,
    @Query('page') page?: number,
  ) {
    const filter = {
      categories: {
        some: {
          category: {
            slug: category,
          },
        },
      },
    };

    return {
      count: await this.postsService.count(filter),
      result: await this.postsService.findMany(filter, page),
    };
  }
}
