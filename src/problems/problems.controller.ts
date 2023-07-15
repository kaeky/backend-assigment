import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProblemsService } from './problems.service';
import { CreateProblemsDto } from './dto/createProblems.dto';
import { ApiTags, ApiResponse, ApiOperation, ApiBody } from '@nestjs/swagger';
import { Problem } from '../models/problem.model';

@ApiTags('problems')
@Controller('problems')
export class ProblemsController {
  constructor(private readonly problemsService: ProblemsService) {}

  @ApiOperation({ summary: 'Report a problem' })
  @ApiBody({ type: CreateProblemsDto })
  @ApiResponse({ status: 201, description: 'Created', type: Problem })
  @Post()
  reportProblem(@Body() data: CreateProblemsDto) {
    return this.problemsService.createProblem(data);
  }

  @ApiOperation({ summary: 'Get all problems' })
  @ApiResponse({ status: 200, description: 'OK', type: Problem })
  @Get()
  getProblems() {
    return this.problemsService.getProblems();
  }

  @ApiOperation({ summary: 'Get pending problems' })
  @ApiResponse({ status: 200, description: 'OK', type: Problem })
  @Get('pending')
  getPendingProblems() {
    return this.problemsService.getPendingProblems();
  }
}
