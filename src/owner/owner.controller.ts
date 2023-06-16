import { Controller, Post, Body } from '@nestjs/common';
import { Owner } from './owner.entity';
import { OwnerService } from './owner.service';


@Controller('owners')
export class OwnerController {
  constructor(private readonly ownerService: OwnerService) {}

  @Post()
  createOwner(@Body() owner: Owner): Promise<Owner> {
    return this.ownerService.createOwner(owner);
  }
}
