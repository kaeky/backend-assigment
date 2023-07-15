import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Problem, ProblemDocument } from '../models/problem.model';
import { CreateProblemsDto } from './dto/createProblems.dto';
import { Agent, AgentDocument } from '../models/agent.model';
import { PendingProblem } from '../models/pendingProblem.model';

@Injectable()
export class ProblemsService {
  constructor(
    @InjectModel(Problem.name) private problemModel: Model<ProblemDocument>,
    @InjectModel(Agent.name) private readonly agentModel: Model<AgentDocument>,

    @InjectModel(PendingProblem.name)
    private readonly pendingProblemModel: Model<PendingProblem>,
  ) {}

  // Implementa aquí los métodos para crear, obtener, actualizar problemas, etc.
  async createProblem(data: CreateProblemsDto): Promise<Problem> {
    const findAgent = await this.agentModel.findOne({
      where: { busy: false },
    });
    if (findAgent) {
      const newProblem = new this.problemModel({
        ...data,
        assignedTo: findAgent._id,
      });

      return await newProblem.save();
    } else {
      const newProblem = new this.problemModel({
        ...data,
        assignedTo: null,
      });

      const savedProblem = await newProblem.save();

      const pendingProblem = new this.pendingProblemModel({
        problemId: savedProblem._id,
      });

      await pendingProblem.save();

      return savedProblem;
    }
  }
  async assignProblemToAgent(
    problemId: string,
    agentId: string,
  ): Promise<Problem> {
    const problem = await this.problemModel.findById(problemId).exec();

    if (!problem) {
      throw new Error('Problem not found');
    }

    problem.assignedTo = agentId;
    return problem.save();
  }
}
