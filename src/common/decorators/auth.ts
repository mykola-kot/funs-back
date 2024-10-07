import { applyDecorators, ExecutionContext, SetMetadata } from '@nestjs/common';

export const AUTH_DISABLE = Symbol('AUTH_DISABLE');

export const AuthDisable = () => {
  return applyDecorators(SetMetadata(AUTH_DISABLE, true));
};

export function targets(context: ExecutionContext) {
  return [context.getHandler(), context.getClass()];
}
