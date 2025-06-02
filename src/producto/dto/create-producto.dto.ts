import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsBoolean, IsNumber, IsString } from "class-validator";

//se parece al archivo Producto.entity pero se diferenciara por
export class CreateProductoDto {


    @ApiProperty()
    @IsString()
    nombre: string;
    
    //con lo siguiente la propiedad aparecera en swagger, cosa que solo se ponga el valor 
    @ApiProperty()

    @IsNumber()
    precio: number;

    @ApiProperty()
    @ApiPropertyOptional()
    @IsBoolean()
    estado: boolean;


}   