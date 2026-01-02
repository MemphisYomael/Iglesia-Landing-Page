import { Component } from '@angular/core';
import { NuestraVisionComponent } from "../nuestra-vision/nuestra-vision.component";
import { CabeceroHeadComponent } from "../cabecero-head/cabecero-head.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-aplicacion-nuestra-vision',
  standalone: true,
  imports: [NuestraVisionComponent, CabeceroHeadComponent, FooterComponent],
  templateUrl: './aplicacion-nuestra-vision.component.html',
  styleUrl: './aplicacion-nuestra-vision.component.css'
})
export class AplicacionNuestraVisionComponent {

}
