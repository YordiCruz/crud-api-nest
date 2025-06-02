import { Injectable, NotFoundException } from '@nestjs/common';
import { Producto } from './producto.entity';
import { UpdateCategoriaDto } from 'src/categoria/dto/update-categoria.dto';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Injectable()
export class ProductoService {

    private productos: Producto[] = [
    { id: 1, nombre: "teclado", precio: 100, estado: true},
    { id: 2, nombre: "mouse", precio: 100, estado: false},
    
    ];

    private id: number = 3;
  listado(): Producto[] {
    return this.productos;

}


  guardar(datos: CreateProductoDto): Producto {
    
    const nuevoproducto: Producto ={
        id: this.id++,
        ...datos

    }

    this.productos.push(nuevoproducto);
    
    return nuevoproducto;
    
  }

  mostrar(id: number): Producto{
    
    const producto = this.productos.find(pro => pro.id == id);
    if (!producto) {
      throw new NotFoundException("producto no encontrado");
    }
    
    return producto;
  }

  
  modificar(id: number, datos: UpdateProductoDto):Producto{
    const producto = this.mostrar(id);
    //como no estamos con  base de datos se utilizara lo siguiente
    Object.assign(producto, datos);
    return producto;
  }

  
  eliminar(id: number): void{
    const index = this.productos.findIndex(pro => pro.id == id);
    if (index === -1) {
      throw new NotFoundException("producto no encontrado");
    }
    //splice es para eliminar segun el index que le pasamos y el numero de elementos que queremos eliminar
    this.productos.splice(index, 1);
  }


}
