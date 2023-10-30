import { Controller, Get, Header, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('Access-Control-Allow-Origin', '*')
  getAllCars(
    @Query('limit') limit: string,
    @Query('brand') brand: string,
    @Query('model') model: string,
    @Query('color') color: string,
    @Query('sort') sort: string,
  ) {
    return this.appService.getAllCars({ limit, brand, model, color, sort });
  }

  @Get('/:id')
  getCar(@Param('id') id: string) {
    return this.appService.getCar(id);
  }
}
