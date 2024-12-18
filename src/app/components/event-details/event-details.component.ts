import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/event.model';

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.css'
})
export class EventDetailsComponent implements OnInit {
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
          this.router.navigate(['']);
        }
      });
    }
  }

  goBack(): void {
    this.router.navigate(['']);
  }
}