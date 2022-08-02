import { Body, Controller, Get, Post } from "@nestjs/common";
import { TicketsDto } from "./dto";
import { TicketsService } from "./tickets.service";

@Controller('ticket')
export class TicketsController {
    constructor(private ticketsService: TicketsService) { }

    @Post('')
    newTicket(@Body() dto: TicketsDto) {
        return this.ticketsService.newTicket(dto)
    }

    @Get('')
    getAllTickets() {
        return this.ticketsService.getAllTickets()
    }
}