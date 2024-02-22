import { Controller, Get, Param } from '@nestjs/common';
import { FizzBuzzService } from './fizz-buzz.service';

@Controller('fizz-buzz')
export class FizzBuzzController {

  constructor(private readonly fizzBuzzService: FizzBuzzService) { }

  @Get(':num')
  async getFizzBuzz(
    @Param('num') num: number
  ) {
    return await this.fizzBuzzService.getFizzBuzz(num)
  }
}
