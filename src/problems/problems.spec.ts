import { Test, TestingModule } from '@nestjs/testing';
import { ProblemsResolver } from './problems.resolver';
import { ProblemsService } from './problems.service';
import { CreateProblemsDto } from './dto/createProblems.dto';
import { MongooseModule } from '@nestjs/mongoose';
import { Problem, ProblemSchema } from '../models/problem.model';
import { Agent, AgentSchema } from '../models/agent.model';
import {
  PendingProblem,
  PendingProblemSchema,
} from '../models/pendingProblem.model';
import { MongooseConfigModule } from '../config/mongoose.module';
import { ConfigModule } from '@nestjs/config';

describe('ProblemsController', () => {
  let controller: ProblemsResolver;
  let service: ProblemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          envFilePath: '.env',
        }),
        MongooseConfigModule,
        MongooseModule.forFeature([
          { name: Problem.name, schema: ProblemSchema },
          { name: Agent.name, schema: AgentSchema },
          { name: PendingProblem.name, schema: PendingProblemSchema },
        ]),
      ],
      controllers: [ProblemsResolver],
      providers: [ProblemsService],
    }).compile();

    controller = module.get<ProblemsResolver>(ProblemsResolver);
    service = module.get<ProblemsService>(ProblemsService);
  });

  describe('reportProblem', () => {
    it('should create a new problem', async () => {
      const createDto: CreateProblemsDto = {
        title: 'Test Problem',
        description: 'This is a test problem',
      };

      const createdProblem = {
        _id: '1',
        title: 'Test Problem',
        description: 'This is a test problem',
        assignedTo: null,
        resolved: false,
      };

      jest.spyOn(service, 'createProblem').mockResolvedValue(createdProblem);

      const result = await controller.reportProblem(createDto);

      expect(result).toEqual(createdProblem);
    });
  });

  describe('getProblems', () => {
    it('should return a list of problems', async () => {
      const problems = [
        {
          id: '1',
          title: 'Problem 1',
          description: 'Description 1',
          assignedTo: '1',
          resolved: false,
        },
        {
          id: '2',
          title: 'Problem 2',
          description: 'Description 2',
          assignedTo: '1',
          resolved: false,
        },
      ];

      jest.spyOn(service, 'getProblems').mockResolvedValue(problems);

      const result = await controller.getProblems();

      expect(result).toEqual(problems);
    });
  });

  describe('getPendingProblems', () => {
    it('should return a list of pending problems', async () => {
      const pendingProblems = [
        { problemId: 'Description 1' },
        { problemId: 'Description 2' },
      ];

      jest
        .spyOn(service, 'getPendingProblems')
        .mockResolvedValue(pendingProblems);

      const result = await controller.getPendingProblems();

      expect(result).toEqual(pendingProblems);
    });
  });

  // Add more tests for other controller methods if needed
});
