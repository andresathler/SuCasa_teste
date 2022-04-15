import { IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateStaffDto {
  @IsEmail()
  email: string;

  @IsNumber()
  price: number;

  @IsString()
  name: string;
}
