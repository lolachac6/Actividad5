import { Component } from '@angular/core';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListadoNoticiasComponent } from './components/listado-noticias/listado-noticias.component';
import { Inoticias } from './interfaces/inoticias.interface';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormularioComponent,ListadoNoticiasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 noticias: Inoticias[]= [{titulo:"LA FILARMÓNICA DE VIENA EN EL TEATRO DE LA MAESTRANZA DE SEVILLA",imagen: "https://www.codalario.com/v_portal/inc/imagen.asp?f=Filarmonica_de_Viena_en_el_Maestra3438.jpg&w=963&c=0",texto:"La mítica Filarmónica de Viena sólo había actuado una vez en Sevilla con anterioridad. Fue el 7 de septiembre de 1992 y en el marco de los fastos de la Expo, cuando la ciudad del Guadalquivir devino en pasarela de la cultura mundial. En esa ocasión, dirigida por el que era –tras la desaparición de Karajan y Bernstein–, su director de referencia, Claudio Abbado, ofreció un programa rotundo compuesto por dos obras: la 100ª sinfonía de Haydn y la 1ª de Mahler.", fecha: "25 de junio de 2024"},{titulo: "ADRIANA LECOUVREUR EN EL LICEU", imagen:"https://www.codalario.com/v_portal/inc/imagen.asp?f=Adriana_Lecouvreur6126.png&w=963&c=0", texto:"Volvía al Liceo de Barcelona Adriana Lecouvreur y la ya clásica puesta en escena de David MacVicar, después de las funciones de 2012, de las que pude ver los tres repartos programados, con uno formado por Barbara Frittoli, Roberto Alagna, Dolora Zajick y Juan Pons, lo que calificó en su día mi añorado amigo y maestro Joaquín Sagarmínaga como el “último reparto de disco”.",fecha:"26 de junio de 2024"}]
}
