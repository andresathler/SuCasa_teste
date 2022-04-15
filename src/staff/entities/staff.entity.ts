import { User, Events } from '@prisma/client';

export class Staff {
  id?: string;
  email: string;
  worker: User[];
  price: number;
  numWorkers: number;
  name: string;
  Event: Events[];
}
