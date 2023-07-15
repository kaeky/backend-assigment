import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { AgentsService } from './agents.service';
import { CreateAgentDto } from './dto/createAgent.dto';
import { UpdateAgentDto } from './dto/updateAgent.dto';

@Controller('agents')
export class AgentsController {
  constructor(private readonly agentsService: AgentsService) {}

  @Get('all')
  getAllAgents() {
    return this.agentsService.getAllAgents();
  }
  @Get()
  getAgents() {
    return this.agentsService.getAvailableAgents();
  }
  @Post()
  createAgent(@Body() createAgentDto: CreateAgentDto) {
    return this.agentsService.createAgent(createAgentDto.name);
  }

  @Post(':agentId')
  setAgentStatus(
    @Body() updateAgentDto: UpdateAgentDto,
    @Param('agentId') agentId: string,
  ) {
    return this.agentsService.setAgentStatus(agentId, updateAgentDto.busy);
  }
}
