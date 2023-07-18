import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Field, ObjectType } from '@nestjs/graphql';

export type AgentDocument = Agent & Document;

@Schema()
@ObjectType()
export class Agent {
  @Field()
  readonly _id: string;

  @Field()
  @Prop()
  name: string;

  @Field({ nullable: true })
  @Prop({ default: null })
  currentProblem: string;

  @Field()
  @Prop({ default: false })
  busy: boolean;
}

export const AgentSchema = SchemaFactory.createForClass(Agent);
