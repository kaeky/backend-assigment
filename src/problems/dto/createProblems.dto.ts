import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProblemsDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;
  @IsNotEmpty()
  @IsString()
  readonly description: string;
}
