import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceroHeadComponent } from "./cabecero-head/cabecero-head.component";
import { FirstSectionComponent } from "./first-section/first-section.component";
import { HorariosComponent } from "./horarios/horarios.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CabeceroHeadComponent, FirstSectionComponent, HorariosComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'IBCG-RD';
}
