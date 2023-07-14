import { MongooseModuleOptions } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MongoConfig {
  createMongooseOptions(): MongooseModuleOptions {
    return {
      uri: `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@docred.l1mwjgr.mongodb.net/?retryWrites=true&w=majority`,
      retryAttempts: 3,
      retryDelay: 1000,
    };
  }
}
