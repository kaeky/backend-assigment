import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AgentsResolver } from './agents.resolver';
import { AgentsService } from './agents.service';
import { Agent, AgentSchema } from '../models/agent.model';
import { Problem, ProblemSchema } from '../models/problem.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Agent.name, schema: AgentSchema },
      { name: Problem.name, schema: ProblemSchema },
    ]),
  ],
  controllers: [],
  providers: [AgentsService, AgentsResolver],
})
export class AgentsModule {}
