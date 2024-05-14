import { Test, TestingModule } from '@nestjs/testing';
import { IntencionesService } from './intenciones.service';

describe('IntencionesService', () => {
  let service: IntencionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IntencionesService],
    }).compile();

    service = module.get<IntencionesService>(IntencionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
