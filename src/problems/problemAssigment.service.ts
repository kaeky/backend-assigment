import { Injectable, OnModuleInit } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProblemsService } from './problems.service';
import { AgentsService } from '../agents/agents.service';
import {
  PendingProblem,
  PendingProblemDocument,
} from '../models/pendingProblem.model';

@Injectable()
export class ProblemAssignmentService implements OnModuleInit {
  constructor(
    private readonly agentsService: AgentsService,
    private readonly problemsService: ProblemsService,
    @InjectModel(PendingProblem.name)
    private readonly pendingProblemModel: Model<PendingProblemDocument>,
  ) {}

  onModuleInit() {
    this.assignPendingProblems();
  }

  @Cron('0 * * * * *') // Ejecutar cada minuto, ajusta el cron según tus necesidades
  async assignPendingProblems() {
    const availableAgents = await this.agentsService.getAvailableAgents();
    const pendingProblems = await this.pendingProblemModel.find().exec();

    for (const pendingProblem of pendingProblems) {
      if (availableAgents.length === 0) {
        break;
      }

      const agent = availableAgents.shift();
      await this.agentsService.assignAgent(agent._id);

      await this.problemsService.assignProblemToAgent(
        pendingProblem.problemId,
        agent._id,
      );

      await this.pendingProblemModel
        .findByIdAndRemove(pendingProblem.id)
        .exec();
    }
  }
}
