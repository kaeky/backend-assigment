import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Problem, ProblemDocument } from '../models/problem.model';
import { CreateProblemsDto } from './dto/createProblems.dto';

@Injectable()
export class ProblemsService {
  constructor(
    @InjectModel(Problem.name) private problemModel: Model<ProblemDocument>,
  ) {}

  // Implementa aquí los métodos para crear, obtener, actualizar problemas, etc.
  async createProblem(data: CreateProblemsDto): Promise<Problem> {
    const newProblem = new this.problemModel(data);
    await newProblem.save();
    return newProblem;
  }
}
