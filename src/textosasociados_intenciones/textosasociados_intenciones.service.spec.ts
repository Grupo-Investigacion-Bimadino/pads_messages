import { Test, TestingModule } from '@nestjs/testing';
import { TextosasociadosIntencionesService } from './textosasociados_intenciones.service';

describe('TextosasociadosIntencionesService', () => {
  let service: TextosasociadosIntencionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TextosasociadosIntencionesService],
    }).compile();

    service = module.get<TextosasociadosIntencionesService>(TextosasociadosIntencionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
