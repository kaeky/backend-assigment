import { Controller, Get } from '@nestjs/common';
import { ProblemsService } from './problems.service';

@Controller('problems')
export class ProblemsController {
  constructor(private readonly problemsService: ProblemsService) {}

  // Implementa aquí las rutas y métodos correspondientes
  @Get()
  getAllProblems() {
    return this.problemsService.createProblem('title', 'description');
  }
}
