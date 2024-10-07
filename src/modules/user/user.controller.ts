import { Body, Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthDisable } from '../../common/decorators/auth';
import { UserModel } from '../../models/user.model';

@Controller('api/v1/')
@AuthDisable()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('add-user')
  async addUser(
    @Body() userData: { name: string; email: string; phone: string },
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @Get('get-user/:id')
  async getUser(@Param('id') id: number): Promise<UserModel> {
    return this.userService.getUserById(id);
  }

  @Delete('del-user/:id')
  async delUser(@Param('id') id: number): Promise<{ deleted: boolean }> {
    return this.userService.delUserById(id);
  }
}
