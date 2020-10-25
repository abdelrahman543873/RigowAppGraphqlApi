import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateUserDto {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  emailAddress: string;

  @Field(() => Int)
  phoneNumber: number;

  @Field()
  password: string;

  @Field(() => Int)
  businessProfile: number;

  @Field(() => Int)
  userProfile?: number;
}
