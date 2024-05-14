import { Test, TestingModule } from '@nestjs/testing';
import { IntencionesController } from './intenciones.controller';
import { IntencionesService } from './intenciones.service';

describe('IntencionesController', () => {
  let controller: IntencionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IntencionesController],
      providers: [IntencionesService],
    }).compile();

    controller = module.get<IntencionesController>(IntencionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
