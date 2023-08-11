import { RestaurantModule } from './modules/restaurant/restaurant.module';
import { TypeOrmConfig } from './config/typeorm.config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [RestaurantModule, TypeOrmModule.forRoot(TypeOrmConfig)],
})
export class AppModule {}
