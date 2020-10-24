import {Int, Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class createBusinessDto {
  @Field()
  name:string;
  
  @Field(()=>Int)
  category: number;

  @Field()
  subCategory: string;

  @Field()
  about: string;

  @Field(() => Int)
  customerGender: number;

  @Field(() => Int)
  phoneNumber: number;

  @Field()
  website: string;
}
