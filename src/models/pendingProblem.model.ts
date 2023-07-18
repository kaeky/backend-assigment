import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Field, ObjectType } from '@nestjs/graphql';

export type PendingProblemDocument = PendingProblem & Document;

@Schema()
@ObjectType()
export class PendingProblem {
  @Field()
  @Prop({ required: true })
  problemId: string;
}

export const PendingProblemSchema =
  SchemaFactory.createForClass(PendingProblem);
