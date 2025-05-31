export class Producto {
    id: number; //puede ser numero entero o decimal
    nombre: string;
    //el signo de interrogacion indica que puede ser opcional
    precio?: number;
    estado: boolean;
}