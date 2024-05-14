import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IntencionesService } from './intenciones.service';
import { CreateIntencioneDto } from './dto/create-intencione.dto';
import { UpdateIntencioneDto } from './dto/update-intencione.dto';

@Controller('intenciones')
export class IntencionesController {
  constructor(private readonly intencionesService: IntencionesService) {}

  @Post()
  create(@Body() createIntencioneDto: CreateIntencioneDto) {
    return this.intencionesService.create(createIntencioneDto);
  }

  @Get()
  findAll() {
    return this.intencionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.intencionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIntencioneDto: UpdateIntencioneDto) {
    return this.intencionesService.update(+id, updateIntencioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.intencionesService.remove(+id);
  }
}
