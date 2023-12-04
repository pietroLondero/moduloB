import { Test, TestingModule } from '@nestjs/testing';
import { ModuloBService } from './modulo-b.service';

describe('ModuloBService', () => {
  let service: ModuloBService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModuloBService],
    }).compile();

    service = module.get<ModuloBService>(ModuloBService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
