import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Agent, AgentDocument } from '../models/agent.model';
import { Problem, ProblemDocument } from '../models/problem.model';

@Injectable()
export class AgentsService {
  constructor(
    @InjectModel(Agent.name) private readonly agentModel: Model<AgentDocument>,
    @InjectModel(Problem.name)
    private readonly problemModel: Model<ProblemDocument>,
  ) {}

  async createAgent(name: string): Promise<Agent> {
    const agent = new this.agentModel({ name });
    return agent.save();
  }

  async getAvailableAgents(): Promise<Agent[]> {
    return this.agentModel.find({ busy: false }).exec();
  }

  async setAgentStatus(agentId: string, busy: boolean): Promise<Agent> {
    const agent = await this.agentModel.findById(agentId).exec();

    if (!agent) {
      throw new NotFoundException('Agent not found');
    }
    agent.busy = busy;
    if (!busy && agent.currentProblem) {
      const problem = await this.problemModel
        .findById(agent.currentProblem)
        .exec();
      if (problem) {
        problem.resolved = true;
        problem.save();
        agent.currentProblem = null;
      }
    }
    await agent.save();
    return;
  }
  async assignAgent(agentId: string, pendingProblem: string): Promise<Agent> {
    const agent = await this.agentModel.findById(agentId).exec();

    if (!agent) {
      throw new Error('Agent not found');
    }
    agent.currentProblem = pendingProblem;
    agent.busy = true;
    return agent.save();
  }
}
