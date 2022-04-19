import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Property } from 'src/property/entities/property.entity';

export const GetProperty = createParamDecorator(
  (_data, ctx: ExecutionContext): Property => {
    const req = ctx.switchToHttp().getRequest();
    return req.property;
  },
);
