import { Component } from '@angular/core';
import { GaleriaComponent } from "../galeria/galeria.component";
import { CabeceroHeadComponent } from "../cabecero-head/cabecero-head.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-aplicacion-galeria',
  standalone: true,
  imports: [GaleriaComponent, CabeceroHeadComponent, FooterComponent],
  templateUrl: './aplicacion-galeria.component.html',
  styleUrl: './aplicacion-galeria.component.css'
})
export class APLICACIONGaleriaComponent {

}
