import { Component } from '@angular/core';
import { CabeceroHeadComponent } from "../cabecero-head/cabecero-head.component";
import { ServidoresComponent } from "../servidores/servidores.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-aplicacion-servidores',
  standalone: true,
  imports: [CabeceroHeadComponent, ServidoresComponent, FooterComponent],
  templateUrl: './aplicacion-servidores.component.html',
  styleUrl: './aplicacion-servidores.component.css'
})
export class AplicacionServidoresComponent {

}
