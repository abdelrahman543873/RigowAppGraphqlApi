import { User } from '../../user/models/user.model';
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement
} from 'sequelize-typescript';

@Table
export class Profile extends Model<Profile> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  gender: number;

  @Column
  birthdate: string;

  @Column
  city: string;

  @Column
  currentWeight: number;

  @Column
  height: number;

  @Column
  activity: number;

  @Column
  goal: number;

  @Column
  goalWeight: number;
}
