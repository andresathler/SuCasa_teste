import { IsNumber, IsString } from 'class-validator';

export class CreatePropertyDto {
  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsNumber()
  propertySize: number;

  @IsString()
  address: string;
}
