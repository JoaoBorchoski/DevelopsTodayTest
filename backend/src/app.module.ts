import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CountriesModule } from './modules/countries/countries.module'
import { UsersModule } from './modules/users/users.module'
import { SessionsModule } from './modules/sessions/sessions.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'royalfit_user',
      password: '123456',
      database: 'royalfit_db',
      autoLoadEntities: true,
      synchronize: false,
    }),
    CountriesModule,
    UsersModule,
    SessionsModule,
  ],
})
export class AppModule {}
