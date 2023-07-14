import { Controller, Post, Body } from '@nestjs/common';
import { AgentsService } from './agents.service';
import { CreateAgentDto } from './dto/createAgent.dto';

@Controller('agents')
export class AgentsController {
  constructor(private readonly agentsService: AgentsService) {}

  @Post()
  createAgent(@Body() createAgentDto: CreateAgentDto) {
    return this.agentsService.createAgent(createAgentDto.name);
  }
}
