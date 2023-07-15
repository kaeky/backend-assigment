import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type ProblemDocument = Problem & Document;

@Schema()
export class Problem {
  @ApiProperty({ example: 'Problem Title' })
  @Prop({ required: true })
  title: string;

  @ApiProperty({ example: 'Problem Description' })
  @Prop({ required: true })
  description: string;

  @ApiProperty({ example: 'Assigned Agent ID' })
  @Prop()
  assignedTo: string;

  @ApiProperty({ example: false })
  @Prop({ default: false })
  resolved: boolean;
}

export const ProblemSchema = SchemaFactory.createForClass(Problem);
