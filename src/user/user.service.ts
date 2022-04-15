import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';
import { Prisma, Role } from '@prisma/client';
import { GetUserFilterDto } from './dto/get-user-filter.dto';
import { throws } from 'assert';
@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const data = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    };

    const createdUser = await this.prisma.user.create({ data });

    return {
      ...createdUser,
      password: undefined,
    };
  }

  findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async getUserById(id: string): Promise<User> {
    const found = await this.prisma.user.findUnique({ where: { id } });
    if (!found) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }

    return {
      ...found,
      password: undefined,
    };
  }

  async updateUser(
    id: string,
    password: string,
    username: string,
    name: string,
    role: Role,
    email: string,
  ): Promise<User> {
    const updateUser = await this.prisma.user.update({
      where: {
        id: id,
      },
      data: {
        password: password,
        username: username,
        name: name,
        role: role,
        email: email,
      },
    });
    return {
      ...updateUser,
      password: undefined,
    };
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput) {
    this.prisma.user.delete({
      where,
    });
    return `Conta de deletada`;
  }
}
