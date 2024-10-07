import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserModel } from '../../models/user.model';
import {UserDto} from "./dto/user.dto";

@Injectable()
export class UserService {
  constructor(@InjectModel(UserModel) private userModel: typeof UserModel) {}

  async createUser(userData: UserDto): Promise<UserModel> {
    return this.userModel.create({
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
    });
  }

  async getUserById(id: number): Promise<UserModel> {
    const user = await this.userModel.findByPk(id);

    if (!user) throw new NotFoundException('User not found');

    return user;
  }

  async delUserById(id: number): Promise<{ deleted: boolean }> {
    const user = await this.userModel.findByPk(id);

    if (!user) throw new NotFoundException('User not found');

    const count = await this.userModel.destroy({
      where: {
        id,
      },
    });

    return {
      deleted: Boolean(count),
    };
  }
}
