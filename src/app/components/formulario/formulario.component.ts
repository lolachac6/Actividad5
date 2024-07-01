import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Inoticias } from '../../interfaces/inoticias.interface';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  newNoticia: Inoticias = {titulo:"",imagen:"", texto:"",fecha:""}
 // @Output() noticiaEmitir: EventEmitter<Inoticias> = new EventEmitter()
  guardarNoticia():void{
    console.log(this.newNoticia)
  }

}
