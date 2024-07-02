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
 @Output() noticiaEmitida: EventEmitter<Inoticias> = new EventEmitter()
  guardarNoticia():void{
    if(this.newNoticia.titulo !== "" && this.newNoticia.imagen !== "" && this.newNoticia.texto !== "" && this.newNoticia.fecha !== ""){
      this.noticiaEmitida.emit(this.newNoticia)
      this.newNoticia = {titulo:"",imagen:"", texto:"",fecha:""}
     
    }else{
      alert("Es obligatorio rellenar todos los campos del formulario")
    }
   
  }

}
