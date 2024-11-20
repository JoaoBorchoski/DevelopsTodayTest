import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { SessionsService } from './sessions.service'
import { SessionsController } from './sessions.controller'
import { AuthMiddleware } from '../../middlewares/auth/auth.middleware'
import { UsersModule } from '../users/users.module'

@Module({
  imports: [UsersModule],
  providers: [SessionsService],
  controllers: [SessionsController],
})
export class SessionsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('users')
  }
}
