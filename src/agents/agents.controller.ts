import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { AgentsService } from './agents.service';
import { CreateAgentDto } from './dto/createAgent.dto';
import { UpdateAgentDto } from './dto/updateAgent.dto';
import {
  ApiTags,
  ApiResponse,
  ApiOperation,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { Agent } from '../models/agent.model';

@ApiTags('agents')
@Controller('agents')
export class AgentsController {
  constructor(private readonly agentsService: AgentsService) {}

  @ApiOperation({ summary: 'Get all agents' })
  @ApiResponse({ status: 200, description: 'OK', type: Agent })
  @Get('all')
  getAllAgents() {
    return this.agentsService.getAllAgents();
  }

  @ApiOperation({ summary: 'Get available agents' })
  @ApiResponse({ status: 200, description: 'OK', type: Agent })
  @Get()
  getAgents() {
    return this.agentsService.getAvailableAgents();
  }

  @ApiOperation({ summary: 'Create a new agent' })
  @ApiBody({ type: CreateAgentDto })
  @ApiResponse({ status: 201, description: 'Created', type: Agent })
  @Post()
  createAgent(@Body() createAgentDto: CreateAgentDto) {
    return this.agentsService.createAgent(createAgentDto.name);
  }

  @ApiOperation({ summary: 'Set agent status' })
  @ApiParam({ name: 'agentId', type: 'string' })
  @ApiBody({ type: UpdateAgentDto })
  @ApiResponse({ status: 200, description: 'OK', type: Agent })
  @Post(':agentId')
  setAgentStatus(
    @Body() updateAgentDto: UpdateAgentDto,
    @Param('agentId') agentId: string,
  ) {
    return this.agentsService.setAgentStatus(agentId, updateAgentDto.busy);
  }
}
