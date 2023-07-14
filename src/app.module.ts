import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseConfigModule } from './config/mongoose.module';
import { ProblemsModule } from './problems';
import { MongooseModule } from '@nestjs/mongoose';
import { Problem, ProblemSchema } from './models/problem.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseConfigModule,
    MongooseModule.forFeature([{ name: Problem.name, schema: ProblemSchema }]),
    ProblemsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
