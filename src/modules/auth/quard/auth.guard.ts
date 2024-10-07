import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Reflector } from '@nestjs/core';
import { AUTH_DISABLE, targets } from '../../../common/decorators/auth';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly jwtService: JwtService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const authDisable = this.reflector.getAllAndOverride<boolean>(
      AUTH_DISABLE,
      targets(context),
    );

    if (authDisable) return true;

    try {
      await this.authorize(context);
    } catch (e) {
      throw new UnauthorizedException(e.message);
    }

    return true;
  }

  private async authorize(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const authorizationHeader = request.headers['authorization'];

    if (!authorizationHeader)
      throw new UnauthorizedException('Token not provided');

    const [type, jwtToken] = authorizationHeader.split(' ');

    if (!jwtToken || type !== 'Bearer') {
      throw new UnauthorizedException('Token not provided');
    }

    const payload: { name: string } | null = await this.jwtService.verifyAsync<{
      name: string;
    }>(jwtToken);

    if (!payload) throw new UnauthorizedException('Token not provided');
  }
}
