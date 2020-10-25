import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BusinessService } from './business.service';
import { createBusinessDto } from './dto/business.dto';
import { BusinessInput } from './input/business.input';
import { FileUpload } from 'graphql-upload';
import { GraphQLUpload } from 'apollo-server-express';
import { createMediaDto } from './dto/media.dto';
import { MediaInput } from './input/media.input';
import { createPhotosDto } from './dto/photos.dto';
import { PhotosInput } from './input/photos.input';

@Resolver()
export class BusinessResolver {
  constructor(private businessService: BusinessService) {}

  @Query(() => [createBusinessDto])
  async gettingBusinesses(): Promise<createBusinessDto[]> {
    return this.businessService.getBusinesses();
  }

  @Query(() => createBusinessDto)
  async findingBusiness(@Args('id') id: number) {
    return this.businessService.findBusiness(id);
  }

  @Mutation(() => createBusinessDto)
  async creatingBusiness(@Args('input') input: BusinessInput) {
    return this.businessService.createBusiness(input);
  }

  @Mutation(() => Boolean)
  async updatingBusiness(
    @Args('id') id: number,
    @Args('input') input: BusinessInput,
    @Args({ name: 'file', type: () => GraphQLUpload, nullable: true })
    file?: FileUpload,
  ) {
    return this.businessService.updateBusiness(id, input, file);
  }

  @Mutation(() => createMediaDto)
  async addingMedia(
    @Args('input') mediaInput: MediaInput,
  ): Promise<createMediaDto> {
    return this.businessService.addMedia(mediaInput);
  }

  @Mutation(() => createPhotosDto)
  async addingPhotos(
    @Args('input') photosInput : PhotosInput,
    @Args('photos', { type: () => GraphQLUpload, nullable: true }) photos?: FileUpload,
  ): Promise<createPhotosDto> {
    return this.businessService.addPhotos(photosInput, photos);
  }
}
