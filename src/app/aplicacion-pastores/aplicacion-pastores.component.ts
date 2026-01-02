import { Component } from '@angular/core';
import { PastoresComponent } from "../pastores/pastores.component";
import { FooterComponent } from "../footer/footer.component";
import { CabeceroHeadComponent } from "../cabecero-head/cabecero-head.component";

@Component({
  selector: 'app-aplicacion-pastores',
  standalone: true,
  imports: [PastoresComponent, FooterComponent, CabeceroHeadComponent],
  templateUrl: './aplicacion-pastores.component.html',
  styleUrl: './aplicacion-pastores.component.css'
})
export class AplicacionPastoresComponent {

}
