import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { User } from './entities/user.entity';
import { ApiTags } from '@nestjs/swagger';
import { prisma } from '@prisma/client';
import { GetUserFilterDto } from './dto/get-user-filter.dto';

@Controller('user')
@ApiTags('UserController')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @IsPublic()
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('/:id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.userService.getUserById(id);
  }

  @Patch('/:id')
  updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    const { password, username, name, role, email } = updateUserDto;
    return this.userService.updateUser(
      id,
      password,
      username,
      name,
      role,
      email,
    );
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string): Promise<void> {
    this.userService.deleteUser({ id });
  }
}
