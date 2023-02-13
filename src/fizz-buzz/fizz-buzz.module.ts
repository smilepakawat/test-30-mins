import { Module } from '@nestjs/common';
import { FizzBuzzController } from './fizz-buzz.controller';
import { FizzBuzzService } from './fizz-buzz.service';

@Module({
  controllers: [FizzBuzzController],
  providers: [FizzBuzzService]
})
export class FizzBuzzModule {}
