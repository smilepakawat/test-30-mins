import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MinimumIntModule } from './minimum-int/minimum-int.module';
import { MostSecondStringModule } from './most-second-string/most-second-string.module';

@Module({
  imports: [MinimumIntModule, MostSecondStringModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
