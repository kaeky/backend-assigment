import { Controller, Post, Body, Param } from '@nestjs/common';
import { AgentsService } from './agents.service';
import { CreateAgentDto } from './dto/createAgent.dto';
import { UpdateAgentDto } from './dto/updateAgent.dto';

@Controller('agents')
export class AgentsController {
  constructor(private readonly agentsService: AgentsService) {}

  @Post()
  createAgent(@Body() createAgentDto: CreateAgentDto) {
    return this.agentsService.createAgent(createAgentDto.name);
  }

  @Post('status/:agentId')
  setAgentStatus(
    @Body() updateAgentDto: UpdateAgentDto,
    @Param('agentId') agentId: string,
  ) {
    return this.agentsService.setAgentStatus(agentId, updateAgentDto.busy);
  }
}
