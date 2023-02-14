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

    controller = module.get<FizzBuzzController>(FizzBuzzController)
    fizzBuzzService = module.get<FizzBuzzService>(FizzBuzzService)
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getFizzBuzz', () => {
    it('should return array of string when success', async () => {
      const num: number = 3
      const result: string[] = ["1", "2", "Fizz"]
      const spyFizzBuzz = jest.spyOn(fizzBuzzService, 'getFizzBuzz').mockImplementation(() => result)
      await controller.getFizzBuzz(num)
      expect(spyFizzBuzz).toBeCalledTimes(1)
    })
  })
});
