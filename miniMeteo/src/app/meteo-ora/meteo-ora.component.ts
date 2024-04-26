import { Component } from '@angular/core';
import { OpenWeatherAPIService } from '../open-weather-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-meteo-ora',
  templateUrl: './meteo-ora.component.html',
  styleUrls: ['./meteo-ora.component.css']
})
export class MeteoOraComponent {
  obsMeteoOra: Observable<Object>;
  meteoOra: any;
  date : Date;
  data: string;
  city: string;
  oraAD: Date;
  oraTD: Date;
  oraA : string;
  oraT : string;


  constructor(public OpenWeather : OpenWeatherAPIService){
  } 

  cerca(search:HTMLInputElement):void{
    if (!search.value){
      return;
    }

    this.city = search.value;
    this.obsMeteoOra = this.OpenWeather.MeteoOra(this.city);
    this.obsMeteoOra.subscribe((data)=>{this.meteoOra=data
      this.date = new Date(this.meteoOra.dt * 1000);
      this.data = this.date.toLocaleDateString('it-IT',{
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      });

      this.oraAD = new Date(this.meteoOra.sys.sunrise *1000);
      this.oraA = this.oraAD.toLocaleDateString('it-IT',{
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      });

      this.oraTD = new Date(this.meteoOra.sys.sunset *1000);
      this.oraT = this.oraTD.toLocaleDateString('it-IT',{
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      });

      

    });


  }

}
