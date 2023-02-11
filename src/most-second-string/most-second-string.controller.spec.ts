import { Test, TestingModule } from '@nestjs/testing';
import { MostSecondStringController } from './most-second-string.controller';

describe('MostSecondStringController', () => {
  let controller: MostSecondStringController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MostSecondStringController],
    }).compile();

    controller = module.get<MostSecondStringController>(MostSecondStringController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
