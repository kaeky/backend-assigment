import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AgentDocument = Agent & Document;

@Schema()
export class Agent {
  @Prop()
  name: string;

  @Prop({ default: false })
  busy: boolean;
}

export const AgentSchema = SchemaFactory.createForClass(Agent);
