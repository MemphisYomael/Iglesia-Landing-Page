import { Component } from '@angular/core';
import { DiezmoComponent } from "../diezmo/diezmo.component";
import { CabeceroHeadComponent } from "../cabecero-head/cabecero-head.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-aplicacion-diezmos-y-ofrendas',
  standalone: true,
  imports: [DiezmoComponent, CabeceroHeadComponent, FooterComponent],
  templateUrl: './aplicacion-diezmos-y-ofrendas.component.html',
  styleUrl: './aplicacion-diezmos-y-ofrendas.component.css'
})
export class APLICACIONDiezmosYOfrendasComponent {

}
