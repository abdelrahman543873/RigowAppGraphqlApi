import { Int, Field, InputType, registerEnumType } from '@nestjs/graphql';
enum customerGender {
  Male,
  Female,
}
enum category {
  Fitness,
  Wellness,
  Sports,
}
registerEnumType(customerGender, { name: 'customerGender' });
registerEnumType(category, { name: 'category' });
@InputType()
export class BusinessInput {
  @Field()
  name: string;

  @Field(() => category, { nullable: true })
  category?: category;

  @Field({ nullable: true })
  subCategory?: string;

  @Field({ nullable: true })
  about?: string;

  @Field(() => customerGender, { nullable: true })
  customerGender?: customerGender;

  @Field(() => Int, { nullable: true })
  phoneNumber?: number;

  @Field({ nullable: true })
  website?: string;
}
