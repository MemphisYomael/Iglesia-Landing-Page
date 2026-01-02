import { Component } from '@angular/core';
import { CabeceroHeadComponent } from "../cabecero-head/cabecero-head.component";
import { SermonesComponent } from "../sermones/sermones.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-aplicacion-sermones',
  standalone: true,
  imports: [CabeceroHeadComponent, SermonesComponent, FooterComponent],
  templateUrl: './aplicacion-sermones.component.html',
  styleUrl: './aplicacion-sermones.component.css'
})
export class APLICACIONSermonesComponent {

}
