import { Routes } from '@angular/router';
import { AplicacionPrincipalComponent } from './aplicacion-principal/aplicacion-principal.component';
import { AplicacionNuestraVisionComponent } from './aplicacion-nuestra-vision/aplicacion-nuestra-vision.component';
import { APLICACIONNuestraMisionComponent } from './aplicacion-nuestra-mision/aplicacion-nuestra-mision.component';
import { APLICACIONSermonesComponent } from './aplicacion-sermones/aplicacion-sermones.component';
import { APLICACIONDiezmosYOfrendasComponent } from './aplicacion-diezmos-y-ofrendas/aplicacion-diezmos-y-ofrendas.component';
import { APLICACIONGaleriaComponent } from './aplicacion-galeria/aplicacion-galeria.component';
import { APLICACIONSoyNuevoComponent } from './aplicacion-soy-nuevo/aplicacion-soy-nuevo.component';
import { APLICACIONConfesionFeComponent } from './aplicacion-confesion-fe/aplicacion-confesion-fe.component';
import { AplicacionPastoresComponent } from './aplicacion-pastores/aplicacion-pastores.component';
import { AplicacionServidoresComponent } from './aplicacion-servidores/aplicacion-servidores.component';
import { CabeceroHeadComponent } from './cabecero-head/cabecero-head.component';
import { NuestraMisionComponent } from './nuestra-mision/nuestra-mision.component';

export const routes: Routes = [
    { path: '', component: AplicacionPrincipalComponent },
    { path: 'galeria', component: APLICACIONGaleriaComponent },
    { path: 'vision', component: AplicacionNuestraVisionComponent },
    { path: 'mision', component: APLICACIONNuestraMisionComponent },
    { path: 'sermon', component: APLICACIONSermonesComponent },
    { path: 'donaciones', component: APLICACIONDiezmosYOfrendasComponent },
    { path: 'nuevo', component: APLICACIONSoyNuevoComponent },
    { path: 'fe', component: APLICACIONConfesionFeComponent },
    { path: 'pastores', component: AplicacionPastoresComponent },
    { path: 'servidores', component: AplicacionServidoresComponent },
    { path: 'cabeza', component: CabeceroHeadComponent },
    { path: 'sinAudio', component: NuestraMisionComponent }
];
