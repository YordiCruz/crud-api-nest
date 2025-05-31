import { Injectable, NotFoundException } from '@nestjs/common';
import { Producto } from './producto.entity';

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


  guardar(datos: any): Producto {
    
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

  
  modificar(id: number):string{
    return "esto es modificar producto desde productoservice "+id;
  }

  
  eliminar(id: number):string{
    return "esto es eliminar producto desde productoservice "+id;
  }


}
