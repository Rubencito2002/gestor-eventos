import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importa RouterModule para las rutas
import { routes } from './app.routes'; // Importa las rutas definidas en app.routes.ts
import { RouterOutlet } from '@angular/router'; // Necesario para el enrutamiento
import { NavbarComponent  } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, NavbarComponent],  // Importa RouterModule y RouterOutlet
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gestor-eventos';
}
