import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { HomeComponent } from './home/home.component';
import { VoleyComponent } from './Deportes/voley/voley.component';
import { BasquetComponent } from './Deportes/basquet/basquet.component';
import { FutbolComponent } from './Deportes/futbol/futbol.component';
import { DeportesComponent } from './Deportes/deportes.component';
import { FooterComponent } from './footer/footer.component';
import { cuentaComponent } from './cuentaUsuario/cuenta.component';
import { loginComponent } from './cuentaUsuario/login/login.component';
import { FormsModule } from '@angular/forms';
import { FiltroPipe } from './Deportes/Pipe/filtro.pipe';
import { ContactoComponent } from './contacto/contacto.component';
import { ReproductorComponent } from './reproductor/reproductor.component';
import { SubirVideoComponent } from './subir-video/subir-video.component';
import { AuthService } from './services/Auth.service';
import { registroComponent } from './cuentaUsuario/registro/registro.component';


import 'video.js';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    VoleyComponent,
    BasquetComponent,
    FutbolComponent,
    DeportesComponent,
    FiltroPipe,
    FooterComponent,
    ContactoComponent,
    cuentaComponent,
    ReproductorComponent,
    SubirVideoComponent,
    registroComponent,
    loginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],

  providers: [AuthService],
  bootstrap: [AppComponent]

  providers: [],
  bootstrap: [AppComponent],


})
export class AppModule { }
