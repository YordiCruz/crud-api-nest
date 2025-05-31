import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductoService } from './producto.service';
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
    crear(@Body() datos: any) {
        return this.produService.guardar(datos);
    }

    //recibimo el id
    @Get(':id')
    mostrar(@Param('id') id: number) {
        return this.produService.mostrar(id);
    }

    @Put(':id')
    actualizar(){
        return this.produService.modificar(4);
    }


    @Delete(':id')    
    eliminar(){
        return this.produService.eliminar(4);
    }




}
