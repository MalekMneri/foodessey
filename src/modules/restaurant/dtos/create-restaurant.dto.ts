import { IsDefined, IsString } from 'class-validator';

export class CreateRestaurantDto {
  @IsDefined()
  @IsString()
  name: string;
}
