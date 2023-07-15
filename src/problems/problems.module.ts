import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Problem, ProblemSchema } from '../models/problem.model';
import { ProblemsController } from './problems.controller';
import { ProblemsService } from './problems.service';
import { Agent, AgentSchema } from '../models/agent.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Problem.name, schema: ProblemSchema },
      { name: Agent.name, schema: AgentSchema },
      { name: 'PendingProblem', schema: ProblemSchema },
    ]),
  ],
  controllers: [ProblemsController],
  providers: [ProblemsService, Agent],
})
export class ProblemsModule {}
