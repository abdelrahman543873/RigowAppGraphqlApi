import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  providers: [UserService, UserResolver],
})
export class UserModule {}
