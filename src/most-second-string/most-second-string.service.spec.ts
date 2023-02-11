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

  describe('getMostSecondString', () => {
    it('it should return most second character when success', async () => {
      const str: string = 'aaaabbcc'
      const expected: string = 'bc'
      const revived = await service.getMostSecondString(str)
      expect(revived).toStrictEqual(expected)
    })
  })
});
