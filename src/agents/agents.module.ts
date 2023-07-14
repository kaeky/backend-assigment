import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AgentsController } from './agents.controller';
import { AgentsService } from './agents.service';
import { Agent, AgentSchema } from '../models/agent.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Agent.name, schema: AgentSchema }]),
  ],
  controllers: [AgentsController],
  providers: [AgentsService],
})
export class AgentsModule {}
