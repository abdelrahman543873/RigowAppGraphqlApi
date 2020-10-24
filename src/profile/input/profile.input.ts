import { InputType, Int, Field, ID, registerEnumType } from '@nestjs/graphql';

enum gender {
  Male,
  Female,
}
enum goal {
  Lose_Weight,
  Maintain_Weight,
  Gain_Weight,
  Stay_Fit_and_Healthy,
}

enum activity {
  Very_Active,
  Active,
  Lightly_Active,
  Not_Very_Active,
}
registerEnumType(gender, { name: 'gender' });
registerEnumType(goal, { name: 'goal' });
registerEnumType(activity, { name: 'activity' });
@InputType()
export class ProfileInput {
  @Field(() => gender, { nullable: true })
  gender?: gender;

  @Field({ nullable: true })
  birthdate?: string;

  @Field({ nullable: true })
  city?: string;

  @Field(() => Int, { nullable: true })
  currentWeight?: number;

  @Field(() => Int, { nullable: true })
  height?: number;

  @Field(() => activity, { nullable: true })
  activity?: activity;

  @Field(() => goal, { nullable: true })
  goal?: goal;

  @Field(() => Int, { nullable: true })
  goalWeight: number;
}
