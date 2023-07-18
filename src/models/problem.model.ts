import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Field, ObjectType } from '@nestjs/graphql';

export type ProblemDocument = Problem & Document;

@Schema()
@ObjectType()
export class Problem {
  @Field()
  @Prop({ required: true })
  title: string;

  @Field()
  @Prop({ required: true })
  description: string;

  @Field({ nullable: true })
  @Prop({ default: null })
  assignedTo: string;

  @Field()
  @Prop({ default: false })
  resolved: boolean;
}

export const ProblemSchema = SchemaFactory.createForClass(Problem);
