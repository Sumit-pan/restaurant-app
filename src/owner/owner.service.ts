import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Owner } from './owner.entity';

@Injectable()
export class OwnerService {
  constructor(
    @InjectRepository(Owner)
    private ownerRepository: Repository<Owner>,
  ) {}

  async createOwner(owner: Owner): Promise<Owner> {
    return this.ownerRepository.save(owner);
  }

  async findOneByEmail(email: string): Promise<Owner> {
    return this.ownerRepository.findOne({ where: { email } });
  }
}
