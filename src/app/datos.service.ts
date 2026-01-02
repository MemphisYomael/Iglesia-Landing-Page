import { Injectable } from '@angular/core';
import { ServicioSermonesService } from './servicio-sermones.service';
import { Sermones } from './models/sermones.model';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

   
  constructor(private sermonesComponente: ServicioSermonesService) { }
  
  guardarSermones(tarjeta: Sermones, llave: string | null = null) {
    if(llave === null) {
      this.sermonesComponente.guardarSermones(tarjeta).subscribe(() => {
        console.log('se agrego nuevo sermon' + tarjeta.tituloSermon + ', ' + tarjeta.linkSermon)
      });
    }
  }
}
