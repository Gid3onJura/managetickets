import { IsDateString, IsNotEmpty, IsString, MaxLength } from "class-validator"

export class TicketsDto {
    @IsNotEmpty()
    @IsString()
    eventTitle: string;

    @IsNotEmpty()
    @IsDateString()
    eventDate: string;

    @IsNotEmpty()
    @IsString()
    eventCity: string;

    @IsNotEmpty()
    @IsString()
    barcode: string;

    @IsNotEmpty()
    @IsString()
    firstName: string;

    @IsNotEmpty()
    @IsString()
    lastName: string;
}