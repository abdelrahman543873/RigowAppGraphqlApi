import { Int, Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
export class createProfileDto {
  @Field()
  gender: number;

  @Field()
  birthdate: string;

  @Field()
  city: string;

  @Field(() => Int)
  currentWeight: number;

  @Field(() => Int)
  height: number;

  @Field(() => Int)
  activity: number;

  @Field(() => Int)
  goal: number;

  @Field(() => Int)
  goalWeight: number;
}
