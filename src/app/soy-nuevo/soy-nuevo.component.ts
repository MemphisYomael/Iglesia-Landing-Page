import { Component } from '@angular/core';

@Component({
  selector: 'app-soy-nuevo',
  standalone: true,
  imports: [],
  templateUrl: './soy-nuevo.component.html',
  styleUrl: './soy-nuevo.component.css'
})
export class SoyNuevoComponent {
  verInformacion:boolean = true;

  mostrarInformacion():void {
    this.verInformacion = false;
  }
}
