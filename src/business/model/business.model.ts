import { BusinessPhotos } from './photos.model';
import { Media } from './media.model';
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  DataType,
  HasMany,
} from 'sequelize-typescript';

@Table
export class Business extends Model<Business> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @Column
  category: number;

  @Column
  subCategory: string;

  @Column
  picture: Buffer;

  @Column
  about: string;

  @Column
  customerGender: number;

  @Column
  phoneNumber: number;

  @Column
  website: string;

  @HasMany(() => Media, 'businessId')
  socialMedia: Media[];

  @HasMany(() => BusinessPhotos, 'businessId')
  photos: BusinessPhotos[];
}
