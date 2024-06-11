import { Test, TestingModule } from '@nestjs/testing';
import { TextosasociadosIntencionesController } from './textosasociados_intenciones.controller';
import { TextosasociadosIntencionesService } from './textosasociados_intenciones.service';

describe('TextosasociadosIntencionesController', () => {
  let controller: TextosasociadosIntencionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TextosasociadosIntencionesController],
      providers: [TextosasociadosIntencionesService],
    }).compile();

    controller = module.get<TextosasociadosIntencionesController>(TextosasociadosIntencionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
