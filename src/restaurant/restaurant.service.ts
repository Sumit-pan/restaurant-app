import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Restaurant } from './restaurant.entity';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(Restaurant)
    private restaurantRepository: Repository<Restaurant>,
  ) {}

  async createRestaurant(restaurant: Restaurant): Promise<Restaurant> {
    return this.restaurantRepository.save(restaurant);
  }

  async getAllRestaurants(): Promise<Restaurant[]> {
    return this.restaurantRepository.find();
  }

  async getRestaurantById(id: number): Promise<Restaurant> {
    return this.restaurantRepository.findOne({ where: { id } });
  }

  async updateRestaurant(
    id: number,
    restaurant: Restaurant,
  ): Promise<Restaurant> {
    await this.restaurantRepository.update(id, restaurant);
    return this.getRestaurantById(id);
  }

  async deleteRestaurant(id: number): Promise<void> {
    await this.restaurantRepository.delete(id);
  }
}
