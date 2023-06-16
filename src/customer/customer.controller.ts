import { Controller, Post, Body } from '@nestjs/common';
import { Customer } from './customer.entity';
import { CustomerService } from './customer.service';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  createCustomer(@Body() customer: Customer): Promise<Customer> {
    return this.customerService.createCustomer(customer);
  }
}
