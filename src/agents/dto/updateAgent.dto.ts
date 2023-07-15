import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { CreateAgentDto } from './createAgent.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateAgentDto extends PartialType(CreateAgentDto) {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsBoolean()
  busy: boolean;
}
