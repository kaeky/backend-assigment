import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Problem, ProblemDocument } from '../models/problem.model';

@Injectable()
export class ProblemsService {
  constructor(
    @InjectModel(Problem.name) private problemModel: Model<ProblemDocument>,
  ) {}

  // Implementa aquí los métodos para crear, obtener, actualizar problemas, etc.
  async createProblem(title: string, description: string) {
    const newProblem = new this.problemModel({ title, description });
    await newProblem.save();
    console.log('Documento guardado en la base de datos:', newProblem);
    return newProblem;
  }
}
