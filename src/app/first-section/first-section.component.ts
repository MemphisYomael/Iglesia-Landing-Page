import { Component } from '@angular/core';
import { GaleriaComponent } from "../galeria/galeria.component";


@Component({
  selector: 'app-first-section',
  standalone: true,
  imports: [GaleriaComponent],
  templateUrl: './first-section.component.html',
  styleUrl: './first-section.component.css'
})
export class FirstSectionComponent {

}
