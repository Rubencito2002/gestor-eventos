export interface Event {
    id: string;                // ID único del evento
    title: string;             // Título del evento
    description: string;       // Descripción del evento
    date: string;              // Fecha del evento (ISO 8601)
    time: string;              // Hora del evento (formato 24h)
    location: string;          // Ubicación del evento
    image: string;             // URL de la imagen del evento
    maxAttendees: number;      // Máximo de asistentes permitidos
    currentAttendees: number;  // Número actual de asistentes
}
