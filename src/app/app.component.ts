import { Component } from '@angular/core';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListadoNoticiasComponent } from './components/listado-noticias/listado-noticias.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormularioComponent,ListadoNoticiasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Actividad5';
}
