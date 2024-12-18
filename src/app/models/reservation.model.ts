export interface Reservation {
    id: string;
    eventTitle: string; // Nombre del evento reservado
    userName: string;
    email: string;
    phone: string;
    numberOfSeats: number;
    date: string; // Fecha en la que se hizo la reserva
}