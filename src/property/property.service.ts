import { Injectable, Query } from '@nestjs/common';
import { GetProperty } from 'src/auth/decorators/get-property.decorator';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { GetPropertyFilterDto } from './dto/get-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { Property } from './entities/property.entity';

@Injectable()
export class PropertyService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPropertyDto: CreatePropertyDto) {
    const Propertydata = createPropertyDto;

    const createdProperty = await this.prisma.property.create({ Propertydata });

    return createdProperty;
  }

  findAll(
    filterDto: GetPropertyFilterDto,
    property: Property,
  ): Promise<Property[]> {
    return this.prisma.property.findAll(filterDto, property);
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
