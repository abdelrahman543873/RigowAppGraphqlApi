import { Int, Field, InputType, registerEnumType } from '@nestjs/graphql';
enum media {
  facebook,
  instagram,
  youtube,
}
registerEnumType(media, { name: 'media' });

@InputType()
export class MediaInput {
  @Field(() => media)
  channel: media;

  @Field()
  link: string;

  @Field(() => Int)
  businessId: number;
}
