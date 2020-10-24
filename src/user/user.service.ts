import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { UserInput } from './input/user.input';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private user: typeof User,
  ) {}

  async createUser(userInput: UserInput): Promise<CreateUserDto> {
    return await this.user.create<User>(userInput);
  }

  async getUsers(): Promise<CreateUserDto[]> {
    return await this.user.findAll<User>();
  }

  async findUser(id: number): Promise<CreateUserDto> {
    return await this.user.findByPk<User>(id);
  }

  async updateUser(id: number, userInput: UserInput):Promise<User[]> {
    const response = await this.user.update(userInput, {
      where: { id },
      returning: true,
    });
    const [updated, updatedUser] = response;
    if (!!updated) {
      return updatedUser;
    }
    return;
  }
}
