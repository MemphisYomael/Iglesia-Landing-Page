import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sermones } from './models/sermones.model';
import { DatosService } from './datos.service';

@Injectable({
  providedIn: 'root'
})
export class ServicioSermonesService {
  
  url = 'https://ibcg-rd-default-rtdb.firebaseio.com/';

  constructor(private httpClient: HttpClient) { }

  listarTarjetas(): Observable<{[llave:string]: Sermones}>{
    return this.httpClient.get<{[llave:string]: Sermones}>(this.url + 'datos.json')
  }

  guardarSermones(tarjeta: Sermones): Observable<any>{
    return this.httpClient.post(`${this.url}datos.json`, tarjeta);
  }

}
