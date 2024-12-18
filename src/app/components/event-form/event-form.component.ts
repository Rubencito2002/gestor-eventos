import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/event.model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-event-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent {
  event: Event = {
    id: '',
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    image: '',  // Aquí almacenaremos la imagen (en base64 o URL)
    maxAttendees: 0,
    currentAttendees: 0
  };

  isEditing: boolean = false;

  constructor(private eventService: EventService, private router: Router) {}

  // Función que se ejecuta al enviar el formulario
  onSubmit(): void {
    if (!this.event.id) {
      this.event.id = uuidv4();  // Generar un ID único si es un nuevo evento
      this.eventService.addEvent(this.event);  // Llamar al servicio para agregar el evento
    } else {
      this.eventService.updateEvent(this.event);  // Llamar al servicio para actualizar el evento
    }
    this.router.navigate(['']);  // Redirigir a la lista de eventos después de guardar
  }

  // Función para manejar la carga de la foto
  onFileChange(event: any): void {
    const file = event.target.files[0];  // Obtener el archivo seleccionado
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.event.image = e.target.result;  // Almacenar la imagen como base64
      };
      reader.readAsDataURL(file);  // Leer el archivo como URL base64
    }
  }
}
