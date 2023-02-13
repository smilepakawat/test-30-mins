import { Test, TestingModule } from '@nestjs/testing';
import { FizzBuzzController } from './fizz-buzz.controller';
import { FizzBuzzService } from './fizz-buzz.service';

describe('FizzBuzzController', () => {
  let controller: FizzBuzzController
  let fizzBuzzService: FizzBuzzService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FizzBuzzController],
      providers: [FizzBuzzService]
    }).compile();

    controller = module.get<FizzBuzzController>(FizzBuzzController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
