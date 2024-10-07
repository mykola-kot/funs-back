import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [HomeModule, AuthModule, UserModule],
  controllers: [],
  providers: [],
})
export class EndpointsModule {}
