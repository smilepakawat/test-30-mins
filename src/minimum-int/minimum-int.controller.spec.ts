import { Test, TestingModule } from '@nestjs/testing';
import { MinimumIntController } from './minimum-int.controller';

describe('MinimumIntController', () => {
  let controller: MinimumIntController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MinimumIntController],
    }).compile();

    controller = module.get<MinimumIntController>(MinimumIntController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
