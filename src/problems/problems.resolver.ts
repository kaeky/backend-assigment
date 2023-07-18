import { ProblemsService } from './problems.service';
import { CreateProblemsDto } from './dto/createProblems.dto';
import { Problem } from '../models/problem.model';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PendingProblem } from '../models/pendingProblem.model';

@Resolver(Problem)
export class ProblemsResolver {
  constructor(private readonly problemsService: ProblemsService) {}

  @Mutation(() => Problem)
  reportProblem(
    @Args('data', { type: () => CreateProblemsDto }) data: CreateProblemsDto,
  ) {
    return this.problemsService.createProblem(data);
  }
  @Query(() => [Problem])
  getProblems() {
    return this.problemsService.getProblems();
  }
  @Query(() => [PendingProblem])
  getPendingProblems() {
    return this.problemsService.getPendingProblems();
  }
}
