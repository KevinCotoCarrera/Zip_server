import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigModule } from '../config/typeorm/typeorm.module';
//import { Todo } from '../entities/todo.entity';
import { User } from '../entities/user.entity';
//import { DatabaseTodoRepository } from './todo.repository';
import { DatabaseUserRepository } from './user.repository';
import { BcryptModule } from '../services/bcrypt/bcrypt.module';
import { LoggerModule } from '../logger/logger.module';

@Module({
  imports: [TypeOrmConfigModule, TypeOrmModule.forFeature([/*Todo,*/ User]), BcryptModule, LoggerModule],
  providers: [/*DatabaseTodoRepository,*/ DatabaseUserRepository],
  exports: [/*DatabaseTodoRepository,*/ DatabaseUserRepository],
})
export class RepositoriesModule {}
