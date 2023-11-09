import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { VoleyComponent } from './Deportes/voley/voley.component';
import { FutbolComponent } from './Deportes/futbol/futbol.component';
import { BasquetComponent } from './Deportes/basquet/basquet.component';
import { DeportesComponent } from './Deportes/deportes.component';

import { ContactoComponent } from './contacto/contacto.component';
import { loginComponent } from './cuentaUsuario/login/login.component';
import { crearCuentaComponent } from './cuentaUsuario/crearCuenta/crearCuenta.component'
import { cuentaComponent } from './cuentaUsuario/cuenta.component'
import { ReproductorComponent } from './reproductor/reproductor.component';
import { SubirVideoComponent } from './subir-video/subir-video.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'Home', component:HomeComponent},
  {path:'Voley', component:VoleyComponent},
  {path:'Futbol', component: FutbolComponent},
  {path:'Basquet', component: BasquetComponent},
  {path:'Deportes', component: DeportesComponent},
  {path:'Reproductor/:id', component: ReproductorComponent},
  {path:'Contacto', component: ContactoComponent},
  {path:'cuenta', component: cuentaComponent},
  {path:'Login', component: loginComponent},
  {path:'crearCuenta', component: crearCuentaComponent},
  {path:'Subir',component: SubirVideoComponent},

  {path: '**', component:HomeComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
