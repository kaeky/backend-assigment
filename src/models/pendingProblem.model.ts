import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type PendingProblemDocument = PendingProblem & Document;

@Schema()
export class PendingProblem {
  @ApiProperty({
    description: 'The ID of the problem',
    required: true,
  })
  @Prop({ required: true })
  problemId: string;
}

export const PendingProblemSchema =
  SchemaFactory.createForClass(PendingProblem);
