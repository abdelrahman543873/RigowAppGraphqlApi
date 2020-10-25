import { Field, Int, ObjectType, InputType, ID } from '@nestjs/graphql';

@InputType()
export class UserInput {
  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field({ nullable: true })
  emailAddress?: string;

  @Field(() => Int, { nullable: true })
  phoneNumber?: number;

  @Field({ nullable: true })
  password?: string;
  
  @Field({nullable:true})
  businessProfile?: number;
}
