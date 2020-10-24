import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { BusinessService } from './business.service';
import { BusinessResolver } from './business.resolver';
import { Business } from './model/business.model';
import { BusinessPhotos } from './model/photos.model';
import { Media } from './model/media.model';

@Module({
  imports: [SequelizeModule.forFeature([Business, BusinessPhotos, Media])],
  providers: [BusinessService, BusinessResolver],
})
export class BusinessModule {}
