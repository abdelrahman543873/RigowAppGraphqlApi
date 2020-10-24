import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { Profile } from '../profile/model/profile.model';
import { ProfileService } from './profile.service';
import { ProfileResolver } from './profile.resolver';

@Module({
  imports: [SequelizeModule.forFeature([Profile])],
  providers: [ProfileService, ProfileResolver],
})
export class ProfileModule {}
