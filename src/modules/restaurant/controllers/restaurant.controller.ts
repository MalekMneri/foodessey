import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CreateRestaurantDto } from '../dtos/create-restaurant.dto';
import { RestaurantService } from '../restaurant.service';
import { controllerMessages } from '@Constants/controller.messages';
import { RestaurantEntity } from '@Modules/restaurant/entities/restaurant.entity';

@Controller('restaurants')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Post()
  createRestaurant(@Body() dto: CreateRestaurantDto) {
    return this.restaurantService.createRestaurant(dto);
  }

  @Get(':id')
  getRestaurant(@Param() id: number) {
    const restaurant = this.restaurantService.getRestaurant(id);

    if (!restaurant) {
      throw new NotFoundException(
        controllerMessages.notFound(RestaurantEntity, id),
      );
    }

    return restaurant;
  }
}
