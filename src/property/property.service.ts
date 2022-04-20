import { Injectable, Query } from '@nestjs/common';
import { error } from 'console';
import { AppController } from 'src/app.controller';
import { GetProperty } from 'src/auth/decorators/get-property.decorator';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from 'src/user/entities/user.entity';
import { CreatePropertyDto } from './dto/create-property.dto';
import { GetPropertyFilterDto } from './dto/get-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { Property } from './entities/property.entity';

@Injectable()
export class PropertyService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createPropertyDto: CreatePropertyDto,
    owner: User,
  ): Promise<Property> {
    const data = {
      ...createPropertyDto,
      availability: new Date('2022-10-20T02:00:00.000z'),
      ownerId: owner.id,
    };

    const createdProperty = await this.prisma.property.create({ data });

    return createdProperty;
  }

  findAll() {
    return 'this.prisma.property.findAll(filterDto, property)';
  }

  findOne(id: number) {
    return `This action returns a #${id} property`;
  }

  update(id: number, updatePropertyDto: UpdatePropertyDto) {
    return `This action updates a #${id} property`;
  }

  remove(id: number) {
    return `This action removes a #${id} property`;
  }
}
