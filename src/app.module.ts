import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MinimumIntModule } from './minimum-int/minimum-int.module';
import { MostSecondStringModule } from './most-second-string/most-second-string.module';
import { FizzBuzzModule } from './fizz-buzz/fizz-buzz.module';

@Module({
  imports: [MinimumIntModule, MostSecondStringModule, FizzBuzzModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
