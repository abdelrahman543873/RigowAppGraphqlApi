import { Profile } from '../../profile/model/profile.model';
import {
  Table,
  Column,
  Model,
  ForeignKey,
  AutoIncrement,
  PrimaryKey,
  BelongsTo,
  HasOne,
} from 'sequelize-typescript';
import { Col } from 'sequelize/types/lib/utils';
import { Business } from '../../business/model/business.model';

@Table
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  emailAddress: string;

  @Column
  phoneNumber: number;

  @Column
  password: string;

  @Column
  @ForeignKey(() => Profile)
  userProfile: number;

  @BelongsTo(() => Profile, 'userProfile')
  profile: Profile;

  @Column
  @ForeignKey(() => Profile)
  businessProfile: number;

  @BelongsTo(() => Business, 'businessProfile')
  business: Business;
}
