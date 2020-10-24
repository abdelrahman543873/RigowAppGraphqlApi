import { BusinessPhotos } from './photos.model';
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  DataType,
  HasMany,
  ForeignKey,
} from 'sequelize-typescript';
import { Business } from './business.model';

@Table
export class Media extends Model<Media> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  channel: number;

  @Column
  link: string;

  @ForeignKey(()=>Business)
  businessId: number
}
