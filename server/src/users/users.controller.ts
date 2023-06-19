import { Controller, Get, Param, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get('/:id')
  findUser(@Param('id') id: string) {
    return this.usersService.findOne(parseInt(id));
  }
  @Get()
  async findUsers(@Query('page') page?: number) {
    return {
      count: await this.usersService.count(),
      result: await this.usersService.findMany(page),
    };
  }
}
