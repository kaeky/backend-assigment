import { AgentsService } from './agents.service';
import { CreateAgentDto } from './dto/createAgent.dto';
import { UpdateAgentDto } from './dto/updateAgent.dto';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Agent } from '../models/agent.model';

@Resolver()
export class AgentsResolver {
  constructor(private readonly agentsService: AgentsService) {}

  @Query(() => [Agent])
  getAllAgents() {
    return this.agentsService.getAllAgents();
  }

  @Query(() => [Agent])
  getAvailableAgents() {
    return this.agentsService.getAvailableAgents();
  }

  @Mutation(() => Agent)
  createAgent(
    @Args('data', { type: () => CreateAgentDto })
    createAgentDto: CreateAgentDto,
  ) {
    return this.agentsService.createAgent(createAgentDto.name);
  }
  @Mutation(() => Agent)
  setAgentStatus(
    @Args('agentId') agentId: string,
    @Args('data', { type: () => UpdateAgentDto }) data: UpdateAgentDto,
  ) {
    return this.agentsService.setAgentStatus(agentId, data.busy);
  }
}
