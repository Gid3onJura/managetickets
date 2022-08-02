import { Injectable } from "@nestjs/common";
import { TicketsDto } from "./dto";

@Injectable({})
export class TicketsService {

    private tickets = [];

    saveTicket(ticket: TicketsDto) {
        // save tickets
        this.tickets.push({
            "eventTitle": ticket.eventTitle,
            "eventDate": ticket.eventDate,
            "eventCity": ticket.eventCity,
            "barcode": ticket.barcode,
            "firstName": ticket.firstName,
            "lastName": ticket.lastName
        });
    }

    constructor() { }
    newTicket(dto: TicketsDto) {

        const savedTicket = this.saveTicket(dto);

        return {
            message: 'new ticket created'
        }
    }

    getAllTickets() {
        return {
            message: 'get all tickets',
            tickets: this.tickets
        }
    }
}