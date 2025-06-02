import { IsBoolean, IsNumber, IsString } from "class-validator";

//se parece al archivo Producto.entity pero se diferenciara por
export class CreateProductoDto {
    @IsString()
    nombre: string;
    
    @IsNumber()
    precio: number;
    
    @IsBoolean()
    estado: boolean;

    
}   