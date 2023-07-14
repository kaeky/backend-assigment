import { Body, Controller, Get } from '@nestjs/common';
import { ProblemsService } from './problems.service';
import { CreateProblemsDto } from './dto/createProblems.dto';

@Controller('problems')
export class ProblemsController {
  constructor(private readonly problemsService: ProblemsService) {}

  // Implementa aquí las rutas y métodos correspondientes
  @Get()
  reportProblem(@Body() data: CreateProblemsDto) {
    return this.problemsService.createProblem(data);
  }
}
