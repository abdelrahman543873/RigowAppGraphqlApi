import { UserService } from './user.service';
import { User } from './models/user.model';
import { InjectModel } from '@nestjs/sequelize';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateUserDto } from './dto/user.dto';
import { UserInput } from './input/user.input';

@Resolver()
export class UserResolver {
  constructor(
    private userService: UserService,
  ) {}

  @Query(() => [CreateUserDto])
  async gettingUsers() {
    return this.userService.getUsers();
  }

  @Query(() => CreateUserDto)
  async findingUser(@Args('id') id: number) {
    return this.userService.findUser(id);
  }

  @Mutation(() => CreateUserDto)
  async creatingUser(@Args('input') input: UserInput) {
    return this.userService.createUser(input);
  }

  @Mutation(() => [CreateUserDto])
  async updatingUser(@Args('id') id: number, @Args('input') input: UserInput) {
    return this.userService.updateUser(id, input);
  }
}
