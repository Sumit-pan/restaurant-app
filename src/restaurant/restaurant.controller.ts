import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { Restaurant } from './restaurant.entity';
import { RestaurantService } from './restaurant.service';

@Controller('restaurants')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Post()
  createRestaurant(@Body() restaurant: Restaurant): Promise<Restaurant> {
    return this.restaurantService.createRestaurant(restaurant);
  }

  @Get()
  getAllRestaurants(): Promise<Restaurant[]> {
    return this.restaurantService.getAllRestaurants();
  }

  @Get(':id')
  getRestaurantById(@Param('id') id: number): Promise<Restaurant> {
    return this.restaurantService.getRestaurantById(id);
  }

  @Put(':id')
  updateRestaurant(
    @Param('id') id: number,
    @Body() restaurant: Restaurant,
  ): Promise<Restaurant> {
    return this.restaurantService.updateRestaurant(id, restaurant);
  }

  @Delete(':id')
  deleteRestaurant(@Param('id') id: number): Promise<void> {
    return this.restaurantService.deleteRestaurant(id);
  }
}
