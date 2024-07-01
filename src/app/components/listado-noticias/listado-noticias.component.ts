import { Component, Input } from '@angular/core';
import { Inoticias } from '../../interfaces/inoticias.interface';

@Component({
  selector: 'app-listado-noticias',
  standalone: true,
  imports: [],
  templateUrl: './listado-noticias.component.html',
  styleUrl: './listado-noticias.component.css'
})
export class ListadoNoticiasComponent {
@Input() noticiasInput:Inoticias[] = []

ngOnInit(){
  this.cargarNoticias()
}

cargarNoticias():string{
  let html = ""
  this.noticiasInput.forEach((noticia:Inoticias)=>{
    html += `<article>
    <h1>${noticia.titulo}</h1>
    <figure>
      <img src="${noticia.imagen}" alt="${noticia.titulo} " />
      <p>${noticia.texto}</p>
      <p> ${noticia.fecha}</p>
    </figure>
  </article>`
  })

  return html
}

}
