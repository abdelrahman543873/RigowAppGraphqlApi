import { Int, Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class createPhotosDto {
  @Field({ nullable: true })
  photoName: string;

  @Field(() => Int)
  businessId: number;
}
