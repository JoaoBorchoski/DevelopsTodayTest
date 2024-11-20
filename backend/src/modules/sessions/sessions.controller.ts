import { Body, Controller, Post } from '@nestjs/common'
import { SessionsService } from './sessions.service'

@Controller('sessions')
export class SessionsController {
  constructor(private sessionsService: SessionsService) {}

  @Post()
  async login(
    @Body('login') login: string,
    @Body('password') password: string,
  ) {
    return this.sessionsService.login(login, password)
  }
}
