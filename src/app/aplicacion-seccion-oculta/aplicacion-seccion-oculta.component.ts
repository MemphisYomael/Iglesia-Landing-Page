import { Component } from '@angular/core';
import { CabeceroHeadComponent } from "../cabecero-head/cabecero-head.component";
import { SeccionOcultaComponent } from "../seccion-oculta/seccion-oculta.component";

@Component({
  selector: 'app-aplicacion-seccion-oculta',
  standalone: true,
  imports: [CabeceroHeadComponent, SeccionOcultaComponent],
  templateUrl: './aplicacion-seccion-oculta.component.html',
  styleUrl: './aplicacion-seccion-oculta.component.css'
})
export class AplicacionSeccionOcultaComponent {

}
