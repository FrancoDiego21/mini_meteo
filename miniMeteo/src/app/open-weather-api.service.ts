import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OpenWeatherAPIService {
  key = 'e7314f5ec30b2c3ad3856f4032ba47b0';

  constructor(private http: HttpClient) { }

  MeteoOra(query: string){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${this.key}&units=metric&lang=it`

    let obsMeteoOra = this.http.get(url);
    return obsMeteoOra;


  }


  Meteo5GHome(query: string){
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${this.key}&units=metric&cnt=5&lang=it`

    let obsMeteo5G = this.http.get(url);
    return obsMeteo5G;

  }

  Meteo5G(query: string){
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${this.key}&units=metric&lang=it`

    let obsMeteo5G = this.http.get(url);
    return obsMeteo5G;

  }

  QualitaAria(lat: number, lon: number){
    const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${this.key}`

    let obsQualitaAria = this.http.get(url);
    return obsQualitaAria;
  }


  GetCoordinate(query: string){
    const key = 'e7314f5ec30b2c3ad3856f4032ba47b0'
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${query}&appid=${key}&limit=1`

    let obsGeoC = this.http.get(url);
    return obsGeoC;
  }
}
