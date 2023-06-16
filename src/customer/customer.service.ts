import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  async createCustomer(customer: Customer): Promise<Customer> {
    return this.customerRepository.save(customer);
  }

  async findOneByEmail(email: string): Promise<Customer> {
    return this.customerRepository.findOne({ where: { email } });
  }
}
