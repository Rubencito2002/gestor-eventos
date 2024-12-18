import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Event } from '../models/event.model';

@Injectable({
    providedIn: 'root',
})
export class EventService {
    private events: Event[] = [
        {
            id: '1',
            title: 'Concierto de Rock',
            description: 'Disfruta de un increíble concierto de rock en vivo.',
            date: '2024-12-25',
            time: '20:00',
            location: 'Estadio Nacional',
            image: '',
            maxAttendees: 5000,
            currentAttendees: 1200,
        },
        {
            id: '2',
            title: 'Feria de Tecnología',
            description: 'Explora las últimas innovaciones en tecnología.',
            date: '2024-12-30',
            time: '10:00',
            location: 'Centro de Convenciones',
            image: '',
            maxAttendees: 2000,
            currentAttendees: 800,
        },
        {
            id: '3',
            title: 'Clase de Yoga al Aire Libre',
            description: 'Relájate y encuentra tu equilibrio con una sesión de yoga.',
            date: '2025-01-10',
            time: '07:00',
            location: 'Parque Central',
            image: '',
            maxAttendees: 50,
            currentAttendees: 30,
        },
    ];
    private eventsSubject = new BehaviorSubject<Event[]>(this.events);

    getEvents() {
        return this.eventsSubject.asObservable();
    }

    addEvent(event: Event) {
        this.events.push(event);
        this.eventsSubject.next(this.events);
    }

    updateEvent(event: Event) {
        const index = this.events.findIndex(e => e.id === event.id);
        if (index > -1) {
            this.events[index] = event;
            this.eventsSubject.next(this.events);
        }
    }

    deleteEvent(id: string) {
        this.events = this.events.filter(event => event.id !== id);
        this.eventsSubject.next(this.events);
    }

    getEventById(id: string): Observable<Event | null> {
        const event = this.events.find(event => event.id === id) || null;
        return of(event);
    }
}
