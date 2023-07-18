import { IsNotEmpty, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateAgentDto {
  @Field()
  @IsNotEmpty()
  @IsString()
  name: string;
}
