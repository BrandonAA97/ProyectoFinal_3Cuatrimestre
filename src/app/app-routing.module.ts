import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VoleyComponent } from './voley/voley.component';
import { FutbolComponent } from './futbol/futbol.component';
import { BasquetComponent } from './basquet/basquet.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'voley', component:VoleyComponent},
  {path:'futbol', component: FutbolComponent},
  {path:'basquet', component: BasquetComponent},
  {path: '**', component:HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
