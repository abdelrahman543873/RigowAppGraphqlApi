import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { createBusinessDto } from './dto/business.dto';
import { BusinessInput } from './input/business.input';
import { Business } from './model/business.model';
import { FileUpload } from 'graphql-upload';
import { MediaInput } from './input/media.input';
import { createMediaDto } from './dto/media.dto';
import { Media } from './model/media.model';
import { createPhotosDto } from './dto/photos.dto';
import { BusinessPhotos } from './model/photos.model';
import { PhotosInput } from './input/photos.input';

@Injectable()
export class BusinessService {
  constructor(
    @InjectModel(BusinessPhotos)
    private businessPhotos: typeof BusinessPhotos,
    @InjectModel(Media)
    private media: typeof Media,
    @InjectModel(Business)
    private business: typeof Business,
  ) {}

  async createBusiness(business: BusinessInput): Promise<createBusinessDto> {
    return this.business.create<Business>(business);
  }

  async getBusinesses(): Promise<createBusinessDto[]> {
    return this.business.findAll<Business>();
  }

  async findBusiness(id: number): Promise<createBusinessDto> {
    return this.business.findByPk<Business>(id);
  }

  async updateBusiness(
    id: number,
    businessInput: BusinessInput,
    fileUpload: FileUpload,
  ): Promise<boolean> {
    if (fileUpload) {
      const { createReadStream, filename } = fileUpload;
      const picture = await this.gettingStream(createReadStream, filename);
      businessInput['picture'] = picture;
    }
    const response = await this.business.update(businessInput, {
      where: { id },
    });
    const [updated] = response;
    return !!updated;
  }

  async addMedia(mediaInput: MediaInput): Promise<createMediaDto> {
    return this.media.create<Media>(mediaInput);
  }

  async addPhotos(photosInput: PhotosInput, fileUpload:FileUpload): Promise<createPhotosDto> {
    if (fileUpload) {
      const { createReadStream, filename } = fileUpload;
      const picture = await this.gettingStream(createReadStream, filename);
      photosInput['photosBuffer'] = picture;
    }
    return this.businessPhotos.create<BusinessPhotos>(photosInput);
  }

  async gettingStream(
    createReadStream: Function,
    filename: string,
  ): Promise<Buffer> {
    let buffer = [];
    return new Promise(resolve =>
      createReadStream()
        .on('data', data => buffer.push(data))
        .on('end', () => resolve(Buffer.concat(buffer))),
    );
  }
}
