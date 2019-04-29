import { Component } from '@angular/core';
import { Auto } from 'src/app/services/autos.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {
  public lista: Array<Auto> = null;

  constructor() { }

  public MostrarElemento(event: Array<Auto>) {
    // console.log('Mostrar Elemento: ', event);
    this.lista = event;
    // console.log('Lista: ', this.lista);
  }

}
