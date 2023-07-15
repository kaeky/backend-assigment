import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PendingProblemDocument = PendingProblem & Document;

@Schema()
export class PendingProblem {
  @Prop({ required: true })
  problemId: string;
}

export const PendingProblemSchema =
  SchemaFactory.createForClass(PendingProblem);
