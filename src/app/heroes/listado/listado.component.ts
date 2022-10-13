import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {

  heroes: String []=['Spiderman','Hulk','Thor','Ironman','Capitan America']
  heroeBorrado: String = '';

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || ''
  }
}

