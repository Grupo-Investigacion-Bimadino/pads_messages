import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TextosasociadosIntencionesService } from './textosasociados_intenciones.service';
import { CreateTextosasociadosIntencioneDto } from './dto/create-textosasociados_intencione.dto';
import { UpdateTextosasociadosIntencioneDto } from './dto/update-textosasociados_intencione.dto';

@Controller('textosasociados-intenciones')
export class TextosasociadosIntencionesController {
  constructor(private readonly textosasociadosIntencionesService: TextosasociadosIntencionesService) {}

  @Post()
  create(@Body() createTextosasociadosIntencioneDto: CreateTextosasociadosIntencioneDto) {
    return this.textosasociadosIntencionesService.create(createTextosasociadosIntencioneDto);
  }

  @Get()
  findAll() {
    return this.textosasociadosIntencionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.textosasociadosIntencionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTextosasociadosIntencioneDto: UpdateTextosasociadosIntencioneDto) {
    return this.textosasociadosIntencionesService.update(+id, updateTextosasociadosIntencioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.textosasociadosIntencionesService.remove(+id);
  }
}
