import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dtos/create-comment.dto';

@Controller('comments')
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  private getChildren(comment, allComments) {
    return {
      ...comment,
      children: allComments
        .filter((c) => c.parentId === comment.id)
        .map((c) => this.getChildren(c, allComments)),
    };
  }

  @Post()
  createComment(@Body() body: CreateCommentDto) {
    return this.commentsService.create(body);
  }

  @Get('/post/:postId')
  async findComments(@Param('postId') postId: string) {
    const comments = await this.commentsService.findMany(parseInt(postId));
    const newComments = [];
    comments.forEach((comment) => {
      if (!comment.parentId)
        newComments.push(this.getChildren(comment, comments));
    });
    return newComments;
  }
}
