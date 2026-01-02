import { Component } from '@angular/core';
import { FirstSectionComponent } from "../first-section/first-section.component";
import { HorariosComponent } from "../horarios/horarios.component";
import { FooterComponent } from "../footer/footer.component";
import { CabeceroHeadComponent } from "../cabecero-head/cabecero-head.component";
import { SermonesComponent } from "../sermones/sermones.component";

@Component({
  selector: 'app-aplicacion-principal',
  standalone: true,
  imports: [FirstSectionComponent, HorariosComponent, FooterComponent, CabeceroHeadComponent, SermonesComponent],
  templateUrl: './aplicacion-principal.component.html',
  styleUrl: './aplicacion-principal.component.css'
})
export class AplicacionPrincipalComponent {

}
