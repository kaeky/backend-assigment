import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateAgentDto } from './createAgent.dto';
import { Field, InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAgentDto extends PartialType(CreateAgentDto, InputType) {
  @Field()
  @IsNotEmpty()
  @IsBoolean()
  busy: boolean;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  currentProblem: string | null;
}
