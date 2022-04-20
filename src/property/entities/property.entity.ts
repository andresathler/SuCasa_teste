import { User } from '@prisma/client';

export class Property {
  id?: string;
  ownerId?: string;
  availability: Date;
  description: string;
  price: number;
  address: string;
  propertySize: number;
  owner?: User;
}
