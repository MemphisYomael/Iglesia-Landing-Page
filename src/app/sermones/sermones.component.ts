import { Component } from '@angular/core';
import { Sermones } from '../models/sermones.model';
import { ServicioSermonesService } from '../servicio-sermones.service';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-sermones',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sermones.component.html',
  styleUrls: ['./sermones.component.css']
})
export class SermonesComponent {
  tarjetas: { [llave: string]: Sermones } = {};

  constructor(private servicioSermones: ServicioSermonesService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.cargarSermones();
  }

  obtenerURLSeguro(link: string): SafeResourceUrl { return this.sanitizer.bypassSecurityTrustResourceUrl(link); };

  cargarSermones() {
    this.servicioSermones.listarTarjetas().subscribe((tarjetas: { [llave: string]: Sermones }) => {
      this.tarjetas = tarjetas;
    });
  }

  obtenerLlaves(): string[] {
    return this.tarjetas ? Object.keys(this.tarjetas).reverse() : [];
  }
  

  activarAcceso: boolean = false;
  llaveSermon: string | null = null;
  contrasenaSer: string = '';
  linkSer: string = '';
  tituloSer: string = '';
  informacionSer: string = '';
  linkMp3: string = '';

  guardarSermon(evento: Event) {
    evento.preventDefault();
    if (this.activarAcceso) {
      const tarjeta = new Sermones(this.linkSer, this.tituloSer, this.informacionSer, this.linkMp3);
      this.servicioSermones.guardarSermones(tarjeta).subscribe(() => {
        console.log('Sermón guardado:', tarjeta);
        this.cargarSermones(); // Actualiza la lista después de guardar
      });
    }
  }
}
