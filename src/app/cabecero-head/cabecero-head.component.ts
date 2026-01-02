import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecero-head',
  standalone: true,
  imports: [],
  templateUrl: './cabecero-head.component.html',
  styleUrl: './cabecero-head.component.css'
})
export class CabeceroHeadComponent {
  toggleDropdown(event: Event) {
    event.preventDefault();
    const dropdown = document.getElementById('nosotrosMenu');
    const arrow = document.querySelector('.dropdown-arrow');
    if (dropdown && arrow) {
      dropdown.classList.toggle('show');
      if (dropdown.classList.contains('show')) {
        arrow.classList.remove('bi-chevron-down');
        arrow.classList.add('bi-chevron-up');
      } else {
        arrow.classList.remove('bi-chevron-up');
        arrow.classList.add('bi-chevron-down');
      }
    }
  }
}
