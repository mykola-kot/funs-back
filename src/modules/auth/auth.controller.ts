import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { AuthDisable } from '../../common/decorators/auth';

@Controller('api/v1/auth')
@AuthDisable()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(@Body() data: LoginDto): Promise<{ token: string }> {
    return this.authService.login(data);
  }
}
