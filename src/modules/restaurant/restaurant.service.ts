import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';
import { RestaurantEntity } from './entities/restaurant.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(RestaurantEntity)
    private readonly restaurantRepository: Repository<RestaurantEntity>,
  ) {}
  createRestaurant(dto: CreateRestaurantDto) {
    return this.restaurantRepository.save(dto);
  }
  getRestaurant(id: number): Promise<RestaurantEntity | null> {
    return this.restaurantRepository.findOneBy({ id });
  }
}
