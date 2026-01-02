import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
instagram:string = 'IBCG.RD';
youtube:string = '@IBCG-RD';
correo:string = 'comunidaddegracia@gmail.com';
direccion:string = 'Nuestra Locacion';
allRights:string = 'IBCG.RD';

mostrarTextoInstagram() {
  this.instagram = 'Ve a nuestro instagram';
}
mostrarTextoEmail() {
  this.correo = 'Envianos un mensaje';
}
mostrarTextoDireccion() {
  this.direccion = 'Consulta nuestra ubicacion';
}
mostrarTextoyoutube() {
  this.youtube = 'Ve a nuestros sermones';
}
}
