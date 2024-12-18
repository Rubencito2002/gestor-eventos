import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router} from '@angular/router';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/event.model';
import { error } from 'console';

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.css'
})
export class ReservationsComponent implements OnInit {
  event: Event | undefined;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
      // Obtener el ID del evento desde la URL
      const eventId = this.route.snapshot.paramMap.get('id');
      if (eventId) {
        // Buscar el evento por su ID
        this.eventService.getEventById(eventId).subscribe((event: Event | null) => {
          if (event) {
            this.event = event;
          } else {
            console.error('Evento no encontrado');
          }
      });
    }
  }

  onReserve(): void {
    if (this.event && this.event.currentAttendees < this.event.maxAttendees) {
      this.event.currentAttendees++;
      this.eventService.updateEvent(this.event);
      this.router.navigate(['/']);
    } else {
      alert('El evento ya ha alcanzado el límite de asistentes.');
    }
  }
}
