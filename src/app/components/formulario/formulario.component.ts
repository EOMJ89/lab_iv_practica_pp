import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AutosService } from 'src/app/services/autos.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public profileGroup: FormGroup;

  constructor(private http: AutosService) { }

  ngOnInit() {
    this.profileGroup = new FormGroup({
      modelo: new FormControl('', [Validators.required]),
      marca: new FormControl('', [Validators.required]),
      precio: new FormControl('', [Validators.required, Validators.min(0)]),
      cantidadPuertas: new FormControl('', [Validators.required]),
      RutaDeFoto: new FormControl('', [Validators.required])
    });
  }

  public Mostrar() {
    // console.log(this.profileGroup.value);
    const autoSubida = { auto: this.profileGroup.value };

    this.http.AñadirAuto(autoSubida).subscribe((rta: any) => {
      // console.log(rta);
      if (rta.ok) {
        console.log('Cargado');
      }
    });
  }
}
