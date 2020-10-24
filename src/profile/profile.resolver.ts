import { InjectModel } from '@nestjs/sequelize';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Profile } from './model/profile.model';
import { ProfileService } from './profile.service';
import { ProfileInput } from './input/profile.input';
import { createProfileDto } from './dto/profile.dto';

@Resolver()
export class ProfileResolver {
  constructor(
    private profileService: ProfileService,
  ) {}

  @Query(() => [createProfileDto])
  async gettingProfiles(): Promise<createProfileDto[]> {
    return this.profileService.getProfiles();
  }

  @Query(() => createProfileDto)
  async findingProfile(@Args('id') id: number) {
    return this.profileService.findProfile(id);
  }

  @Mutation(() => createProfileDto)
  async creatingProfile(@Args('input') input: ProfileInput) {
    return this.profileService.createProfile(input);
  }

  @Mutation(() => [createProfileDto])
  async updatingUser(
    @Args('id') id: number,
    @Args('input') input: ProfileInput,
  ) {
    return this.profileService.updateProfile(id, input);
  }
}
