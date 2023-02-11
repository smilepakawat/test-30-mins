import { Module } from '@nestjs/common';
import { MinimumIntController } from './minimum-int.controller';
import { MinimumIntService } from './minimum-int.service';

@Module({
  controllers: [MinimumIntController],
  providers: [MinimumIntService],
  // imports: [MinimumIntService, MinimumIntController]
})
export class MinimumIntModule { }
