import { Component } from '@angular/core';
import { CabeceroHeadComponent } from "../cabecero-head/cabecero-head.component";
import { FooterComponent } from "../footer/footer.component";
import { NuestraMisionComponent } from "../nuestra-mision/nuestra-mision.component";


@Component({
  selector: 'app-aplicacion-nuestra-mision',
  standalone: true,
  imports: [CabeceroHeadComponent, FooterComponent, NuestraMisionComponent],
  templateUrl: './aplicacion-nuestra-mision.component.html',
  styleUrl: './aplicacion-nuestra-mision.component.css'
})
export class APLICACIONNuestraMisionComponent {

}
