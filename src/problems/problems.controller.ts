import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProblemsService } from './problems.service';
import { CreateProblemsDto } from './dto/createProblems.dto';

@Controller('problems')
export class ProblemsController {
  constructor(private readonly problemsService: ProblemsService) {}

  // Implementa aquí las rutas y métodos correspondientes
  @Post()
  reportProblem(@Body() data: CreateProblemsDto) {
    return this.problemsService.createProblem(data);
  }
  @Get()
  getProblems() {
    return this.problemsService.getProblems();
  }
  @Get('pending')
  getPendingProblems() {
    return this.problemsService.getPendingProblems();
  }
}
