import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantController } from './controllers/restaurant.controller';
import { RestaurantService } from './restaurant.service';
import { Module } from '@nestjs/common';
import { RestaurantEntity } from './entities/restaurant.entity';
@Module({
  imports: [TypeOrmModule.forFeature([RestaurantEntity])],
  controllers: [RestaurantController],
  providers: [RestaurantService],
})
export class RestaurantModule {}
