import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MeteoOraComponent } from './meteo-ora/meteo-ora.component';
import { QualitaAriaComponent } from './qualita-aria/qualita-aria.component';
import { Previsioni5GComponent } from './previsioni5-g/previsioni5-g.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'currentWeather', component: MeteoOraComponent},
  {path: 'qualitaAria', component: QualitaAriaComponent},
  {path: 'previsioni', component: Previsioni5GComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
