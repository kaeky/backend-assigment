import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type AgentDocument = Agent & Document;

@Schema()
export class Agent {
  @ApiProperty()
  readonly _id: string;

  @ApiProperty()
  @Prop()
  name: string;

  @ApiProperty()
  @Prop()
  currentProblem: string;

  @ApiProperty()
  @Prop({ default: false })
  busy: boolean;
}

export const AgentSchema = SchemaFactory.createForClass(Agent);
