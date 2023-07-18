import { Test, TestingModule } from '@nestjs/testing';
import { AgentsResolver } from './agents.resolver';
import { AgentsService } from './agents.service';
import { CreateAgentDto } from './dto/createAgent.dto';
import { UpdateAgentDto } from './dto/updateAgent.dto';
import { Agent, AgentSchema } from '../models/agent.model';
import { ConfigModule } from '@nestjs/config';
import { MongooseConfigModule } from '../config/mongoose.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Problem, ProblemSchema } from '../models/problem.model';

describe('AgentsController', () => {
  let controller: AgentsResolver;
  let service: AgentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          envFilePath: '.env',
        }),
        MongooseConfigModule,
        MongooseModule.forFeature([
          { name: Agent.name, schema: AgentSchema },
          { name: Problem.name, schema: ProblemSchema },
        ]),
      ],
      controllers: [AgentsResolver],
      providers: [AgentsService],
    }).compile();

    controller = module.get<AgentsResolver>(AgentsResolver);
    service = module.get<AgentsService>(AgentsService);
  });

  describe('getAllAgents', () => {
    it('should return all agents', async () => {
      const result: Agent[] = [
        { _id: '1', name: 'Agent 1', currentProblem: 'Problem 1', busy: false },
        { _id: '2', name: 'Agent 2', currentProblem: 'Problem 2', busy: true },
      ];
      jest.spyOn(service, 'getAllAgents').mockResolvedValue(result);

      expect(await controller.getAllAgents()).toBe(result);
      expect(service.getAllAgents).toHaveBeenCalled();
    });
  });

  describe('getAvailableAgents', () => {
    it('should return available agents', async () => {
      const result: Agent[] = [
        { _id: '1', name: 'Agent 1', currentProblem: 'Problem 1', busy: false },
        { _id: '2', name: 'Agent 2', currentProblem: 'Problem 2', busy: false },
      ];
      jest.spyOn(service, 'getAvailableAgents').mockResolvedValue(result);

      expect(await controller.getAvailableAgents()).toBe(result);
      expect(service.getAvailableAgents).toHaveBeenCalled();
    });
  });

  describe('createAgent', () => {
    it('should create a new agent', async () => {
      const createAgentDto: CreateAgentDto = { name: 'Agent1' };
      const result = {
        _id: '64b1f815a24ed01420dce5f0',
        name: 'carlos',
        currentProblem: null,
        busy: false,
      };
      jest.spyOn(service, 'createAgent').mockResolvedValue(result);
      expect(await controller.createAgent(createAgentDto)).toBe(result);
      expect(service.createAgent).toHaveBeenCalledWith(createAgentDto.name);
    });
  });

  describe('setAgentStatus', () => {
    it('should set the status of an agent', async () => {
      const updateAgentDto: UpdateAgentDto = {
        busy: true,
        currentProblem: null,
      };
      const agentId = '1';
      const result = {
        _id: '64b1f815a24ed01420dce5f0',
        name: 'carlos',
        currentProblem: null,
        busy: true,
      };
      jest.spyOn(service, 'setAgentStatus').mockResolvedValue(result);

      expect(await controller.setAgentStatus(agentId, updateAgentDto)).toBe(
        result,
      );
      expect(service.setAgentStatus).toHaveBeenCalledWith(
        agentId,
        updateAgentDto.busy,
      );
    });
  });
});
