import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateAgentDto } from './createAgent.dto';

export class UpdateAgentDto extends PartialType(CreateAgentDto) {
  @ApiProperty({ default: false })
  @IsNotEmpty()
  @IsBoolean()
  busy: boolean;

  @ApiProperty()
  @IsOptional()
  @IsString()
  currentProblem: string | null;
}
