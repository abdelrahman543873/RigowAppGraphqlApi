import { Business } from './business.model';
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  DataType,
  NotEmpty,
  ForeignKey,
} from 'sequelize-typescript';

@Table
export class BusinessPhotos extends Model<BusinessPhotos> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  photoName: string;

  @Column
  photosBuffer: Buffer;

  @ForeignKey(() => Business)
  businessId: number;
}
