import { Routes } from '@angular/router';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventFormComponent } from './components/event-form/event-form.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { ReservationListComponent } from './components/reservation-list/reservation-list.component';

export const routes: Routes = [
   { path: '', component: EventListComponent },
   { path: 'create-event', component: EventFormComponent },
   { path: 'edit-event/:id', component: EventFormComponent },
   { path: 'event-details/:id', component: EventDetailsComponent }, // Ruta para los detalles del evento
   { path: 'reservations/:id', component: ReservationsComponent },  // Ruta para mostrar las reservas del evento
   { path: 'reservations', component: ReservationListComponent },
];
