import { Int, Field, InputType } from '@nestjs/graphql';

@InputType()
export class PhotosInput {
  @Field({ nullable: true })
  photoName: string;

  @Field(() => Int)
  businessId: number;
}
