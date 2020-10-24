import { Int, Field, InputType, registerEnumType, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class createMediaDto {
  @Field(() => ID)
  id: number;
  
  @Field(() => Int)
  channel: number;

  @Field()
  link: string;

  @Field(() => Int)
  businessId: number;
}
