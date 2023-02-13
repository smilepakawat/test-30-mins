import { Test, TestingModule } from '@nestjs/testing';
import { FizzBuzzService } from './fizz-buzz.service';

describe('FizzBuzzService', () => {
  let service: FizzBuzzService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FizzBuzzService],
    }).compile();

    service = module.get<FizzBuzzService>(FizzBuzzService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getFizzBuzz', () => {
    it('should return array of string when success', async () => {
      const num: number = 15
      const expected: string[] = ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]
      const recieved: string[] = await service.getFizzBuzz(num)
      expect(recieved).toStrictEqual(expected)
    })
  })
});
