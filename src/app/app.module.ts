import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

import { FormsModule } from '@angular/forms';
import { FiltroPipe } from './Deportes/Pipe/filtro.pipe';
import { ContactoComponent } from './contacto/contacto.component';




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
    cuentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
