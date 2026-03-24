import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UserModule,
    AuthModule,
    ThrottlerModule.forRoot({
      throttlers: [{
        ttl: 60000, //Está em milissegundos
        limit: 10 //Limite de requisições
      }]
    }),
  ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard
    }
  ],
  exports: [AppService]
})
export class AppModule { }
