import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Auto, AutosService } from 'src/app/services/autos.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  @Output() public buscar = new EventEmitter<Auto[]>();
  public busquedaGroup: FormGroup;

  constructor(private http: AutosService) { }

  ngOnInit() {
    this.busquedaGroup = new FormGroup({
      modelo: new FormControl('', [Validators.required])
    });
  }

  public Buscar() {
    // console.lom(this.busquedaGroup.value);
    // console.log(modelo);
    const modelo: string = this.busquedaGroup.value.modelo;

    this.http.TraerAutos().subscribe((data: Array<Auto>) => {
      const auxArr: Array<Auto> = new Array<Auto>();

      for (const auto of data) {
        // console.log(auto);
        if (auto.modelo === modelo) {
          auxArr.push(auto);
        }
      }

      this.buscar.emit(auxArr);
    });
  }

}
