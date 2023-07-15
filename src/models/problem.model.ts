import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProblemDocument = Problem & Document;

@Schema()
export class Problem {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop()
  assignedTo: string;

  @Prop({ default: false })
  resolved: boolean;
}

export const ProblemSchema = SchemaFactory.createForClass(Problem);
