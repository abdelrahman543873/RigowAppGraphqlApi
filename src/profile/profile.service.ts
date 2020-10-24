import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Profile } from './model/profile.model';
import { createProfileDto } from './dto/profile.dto';
import { ProfileInput } from './input/profile.input';

@Injectable()
export class ProfileService {
  constructor(
    @InjectModel(Profile)
    private profile: typeof Profile,
  ) {}

  async createProfile(profile: ProfileInput): Promise<createProfileDto> {
    return this.profile.create<Profile>(profile);
  }

  async getProfiles(): Promise<createProfileDto[]> {
    return this.profile.findAll<Profile>();
  }

  async findProfile(id: number): Promise<createProfileDto> {
    return this.profile.findByPk<Profile>(id);
  }

  async updateProfile(
    id: number,
    profileInput: ProfileInput,
  ): Promise<Profile[]> {
    const response = await this.profile.update(profileInput, {
      where: { id },
      returning: true,
    });
    const [updated, updateProfile] = response;
    if (!!updated) {
      return updateProfile;
    }
    return;
  }
}
