import { Test, TestingModule } from '@nestjs/testing';
import { MinimumIntService } from './minimum-int.service';

describe('MinimumIntService', () => {
  let service: MinimumIntService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MinimumIntService],
    }).compile();

    service = module.get<MinimumIntService>(MinimumIntService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getMinimumInt', () => {
    it('should return integer when success', async () => {
      const arr: number[] = [99, -1, -2, 4, 5, 7]
      const expected: number = 1
      const revived: number = await service.getMinimumInt(arr)
      expect(revived).toStrictEqual(expected)
    })
  })

  describe('getMinimumInt', () => {
    it('should return integer when success', () => {
      const arr: number[] = [99, -1, -2, 1, 4, 5, 7]
      const expected: number = 2
      const revived: number = service.getMinimumInt(arr)
      expect(revived).toStrictEqual(expected)
    })
  })
});
