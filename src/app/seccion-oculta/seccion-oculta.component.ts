import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GaleriaComponent } from "../galeria/galeria.component";

@Component({
  selector: 'app-seccion-oculta',
  standalone: true,
  imports: [FormsModule, GaleriaComponent],
  templateUrl: './seccion-oculta.component.html',
  styleUrl: './seccion-oculta.component.css'
})
export class SeccionOcultaComponent {
  entrada:any = '';

  contrasena:number = 0;

  contraIncorrecta:boolean = false; 

  contrasenaCorrecta(entrada:any):void{
    this.entrada = entrada;
    if(this.entrada === 'hacercrecerservir1BCG') {
      this.contrasena = 34;
      this.entrada = 34;
      this.contraIncorrecta=false;
    }
    else {
      this.contraIncorrecta=true;
    }
  }
}
