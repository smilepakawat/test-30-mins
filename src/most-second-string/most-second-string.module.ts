import { Module } from '@nestjs/common';
import { MostSecondStringService } from './most-second-string.service';
import { MostSecondStringController } from './most-second-string.controller';

@Module({
  controllers: [MostSecondStringController],
  providers: [MostSecondStringService],
})
export class MostSecondStringModule { }
