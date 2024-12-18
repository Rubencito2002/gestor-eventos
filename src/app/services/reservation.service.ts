import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation.model';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private reservations: Reservation[] = [];

  constructor() {}

  // Obtener todas las reservas
  getReservations(): Reservation[] {
    return this.reservations;
  }

  // Obtener reservas por ID de evento
  getReservationsByEvent(eventId: string): Reservation[] {
    return this.reservations.filter((reservation) => reservation.id === eventId);
  }

  // Añadir una nueva reserva
  addReservation(reservation: Reservation): void {
    this.reservations.push(reservation);
  }

  // Actualizar una reserva
  updateReservation(updatedReservation: Reservation): void {
    const index = this.reservations.findIndex((r) => r.id === updatedReservation.id);
    if (index !== -1) {
      this.reservations[index] = updatedReservation;
    }
  }

  // Eliminar una reserva por ID
  deleteReservation(id: string): void {
    this.reservations = this.reservations.filter((reservation) => reservation.id !== id);
  }
}
