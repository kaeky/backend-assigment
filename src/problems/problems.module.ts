import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Problem, ProblemSchema } from '../models/problem.model';
import { ProblemsResolver } from './problems.resolver';
import { ProblemsService } from './problems.service';
import { Agent, AgentSchema } from '../models/agent.model';
import {
  PendingProblem,
  PendingProblemSchema,
} from '../models/pendingProblem.model';
import { ProblemAssignmentService } from './problemAssigment.service';
import { AgentsService } from '../agents/agents.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Problem.name, schema: ProblemSchema },
      { name: Agent.name, schema: AgentSchema },
      { name: PendingProblem.name, schema: PendingProblemSchema },
    ]),
  ],
  controllers: [],
  providers: [
    AgentsService,
    ProblemsService,
    ProblemAssignmentService,
    ProblemsResolver,
  ],
})
export class ProblemsModule {}
