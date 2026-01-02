import { Component } from '@angular/core';
import { SoyNuevoComponent } from "../soy-nuevo/soy-nuevo.component";
import { CabeceroHeadComponent } from "../cabecero-head/cabecero-head.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-aplicacion-soy-nuevo',
  standalone: true,
  imports: [SoyNuevoComponent, CabeceroHeadComponent, FooterComponent],
  templateUrl: './aplicacion-soy-nuevo.component.html',
  styleUrl: './aplicacion-soy-nuevo.component.css'
})
export class APLICACIONSoyNuevoComponent {

}
