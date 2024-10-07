import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthGuard } from './quard/auth.guard';
import { JwtModule, JwtSignOptions } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: async () => {
        const signOptions: JwtSignOptions = { algorithm: 'HS256' };

        return {
          secret: process.env.jwtSecret,
          signOptions,
        };
      },
    }),
  ],
  providers: [AuthGuard, AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
