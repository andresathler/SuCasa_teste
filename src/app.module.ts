import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { StaffModule } from './staff/staff.module';
import { PropertyModule } from './property/property.module';
import { UserEventModule } from './user-event/user-event.module';
@Module({
  imports: [
    AuthModule,
    PrismaModule,
    UserModule,
    StaffModule,
    PropertyModule,
    UserEventModule,
  ],
  controllers: [AppController],
  providers: [AppService, { provide: APP_GUARD, useClass: JwtAuthGuard }],
})
export class AppModule {}
