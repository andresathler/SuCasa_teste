import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreatePropertyDto {
  @IsString()
  ownerId: string;

  @IsDate()
  availability: Date;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsNumber()
  propertySize: number;

  @IsString()
  address: string;
}
