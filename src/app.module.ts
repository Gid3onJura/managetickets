import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';
import { TicketsModule } from './tickets/tickets.module';

@Module({
  imports: [AuthModule, TicketsModule]
})
export class AppModule { }
