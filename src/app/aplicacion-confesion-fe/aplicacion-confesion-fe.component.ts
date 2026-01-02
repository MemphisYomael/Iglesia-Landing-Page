import { Component } from '@angular/core';
import { CabeceroHeadComponent } from "../cabecero-head/cabecero-head.component";
import { FooterComponent } from "../footer/footer.component";
import { ConfesionFeComponent } from "../confesion-fe/confesion-fe.component";

@Component({
  selector: 'app-aplicacion-confesion-fe',
  standalone: true,
  imports: [CabeceroHeadComponent, FooterComponent, ConfesionFeComponent],
  templateUrl: './aplicacion-confesion-fe.component.html',
  styleUrl: './aplicacion-confesion-fe.component.css'
})
export class APLICACIONConfesionFeComponent {

}
