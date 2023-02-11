import { Test, TestingModule } from '@nestjs/testing';
import { MostSecondStringService } from './most-second-string.service';

describe('MostSecondStringService', () => {
  let service: MostSecondStringService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MostSecondStringService],
    }).compile();

    service = module.get<MostSecondStringService>(MostSecondStringService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
