import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MeteoOraComponent } from './meteo-ora/meteo-ora.component';
import { HttpClientModule, HttpContext } from '@angular/common/http';
import { QualitaAriaComponent } from './qualita-aria/qualita-aria.component';
import { Previsioni5GComponent } from './previsioni5-g/previsioni5-g.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MeteoOraComponent,
    QualitaAriaComponent,
    Previsioni5GComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
