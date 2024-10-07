import { BadRequestException, Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async login(data: LoginDto): Promise<{ token: string }> {
    if (data.name !== process.env.DEFAULT_USER && data.password !== process.env.DEFAULT_PASS) {
      throw new BadRequestException();
    }

    const token = await this.jwtService.signAsync(
      { name: data.name },
      {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES_IN,
      },
    );

    return { token };
  }
}
