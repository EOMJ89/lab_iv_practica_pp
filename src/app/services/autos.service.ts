import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Auto {
  // _id: string;
  id: string;
  modelo: string;
  marca: string;
  precio: number;
  cantidadPuertas: string;
  RutaDeFoto: string;
}

@Injectable({
  providedIn: 'root'
})
export class AutosService {
  /** Antes de iniciar, si se requiere usar base de datos, no olvide revisar el archivo Databases.php
   * para ver que la base de datos que va a usar es la correcta, como nombre tiene 'labIV'.
   * Los archivos AutoApi.php y Auto.php contienen todos los metodos necesarios para un ABM.
   *
   * El localhost de los salones para Xampp es http://localhost:8080/
   */

  constructor(private httpClient: HttpClient) { }

  public TraerAutos() {
    // return this.httpClient.get('http://192.168.2.31:3003/autos');
    return this.httpClient.get('http://localhost/lab_IV/parcial-practica/backend/');
  }

  public AñadirAuto(data: any) {
    // return this.httpClient.post('http://192.168.2.31:3003/autos', data);
    return this.httpClient.post('http://localhost/lab_IV/parcial-practica/backend/', data);

    /*{
      "auto":
      {
        "modelo": "corsa",
        "marca": "chevrolet",
        "precio": 20000,
        "cantidadPuertas": "tres",
        "RutaDeFoto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Corsa_sport_2004.jpg/800px-Corsa_sport_2004.jpg"
      }
    } */
  }

  public EliminarAuto(idAux: any) {
    // return this.httpClient.delete('http://192.168.2.31:3003/autos/' + idAux);
    return this.httpClient.post('http://localhost/lab_IV/parcial-practica/backend/remove', { id: idAux });
  }
}
