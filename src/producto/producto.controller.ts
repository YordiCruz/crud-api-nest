import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
//ruta base
@Controller('producto')
export class ProductoController {
    
    //inyectamos el servicio
    constructor(private readonly produService: ProductoService) {

    }


//si el decorador esta vacio supone que es un '/'
    @Get()
    //depende del tipo de retorno de esta funcion es el que se va a devolver
    funlistar() {
        return this.produService.listado();
        
    }

    @Post()
    crear(@Body() datos: CreateProductoDto) {
        
        return this.produService.guardar(datos);
    }

    //recibimo el id
    @Get(':id')
    mostrar(@Param('id') id: number) {
        return this.produService.mostrar(id);
    }

    @Patch(':id')
    actualizar(@Param('id') id: number, @Body() datos: UpdateProductoDto) {
        return this.produService.modificar(id, datos);
    }


    @Delete(':id')    
    eliminar(@Param('id') id: number){
        return this.produService.eliminar(id);
    }




}
