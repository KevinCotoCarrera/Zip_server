import { Module } from '@nestjs/common';
import { UsecasesProxyModule } from '../usecases-proxy/usecases-proxy.module';
import { AuthController } from './auth/auth.controller';
import { ExceptionsModule } from '../exceptions/exceptions.module';
import { LoggerModule } from '../logger/logger.module';
// import { TodoController } from './todo/todo.controller';

@Module({
  imports: [UsecasesProxyModule.register(), ExceptionsModule, LoggerModule],
  controllers: [/*TodoController,*/ AuthController],
})
export class ControllersModule {}
