import { Controller, Get, Query } from "@nestjs/common";
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  async findProducts(@Query('page') page?: number) {
    return {
      count: await this.productsService.count(),
      result: await this.productsService.findMany(page),
    };
  }
}
