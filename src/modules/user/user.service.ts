import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserModel } from '../../models/user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel(UserModel) private userModel: typeof UserModel) {}

  async createUser(userData: {
    name: string;
    email: string;
    phone: string;
  }): Promise<UserModel> {
    return this.userModel.create(userData);
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
