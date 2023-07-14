import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Agent, AgentDocument } from '../models/agent.model';

@Injectable()
export class AgentsService {
  constructor(
    @InjectModel(Agent.name) private readonly agentModel: Model<AgentDocument>,
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
      throw new Error('Agent not found');
    }

    agent.busy = busy;
    return agent.save();
  }
}
