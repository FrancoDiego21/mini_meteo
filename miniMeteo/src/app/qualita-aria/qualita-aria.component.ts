import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { OpenWeatherAPIService } from '../open-weather-api.service';

@Component({
  selector: 'app-qualita-aria',
  templateUrl: './qualita-aria.component.html',
  styleUrls: ['./qualita-aria.component.css']
})
export class QualitaAriaComponent {
  obsQualitaAria : Observable<Object>;
  qualitaAria: any;
  obsMeteoOra: Observable<Object>;
  meteoOra: any;
  city: string;
  qualitaText : string;
  date : Date;
  data: string;

  constructor(public OpenWeather : OpenWeatherAPIService){}

  submit(search: HTMLInputElement): void{
    if (!search.value){
      return;
    }

    this.city = search.value;
    this.obsMeteoOra = this.OpenWeather.MeteoOra(this.city);
    this.obsMeteoOra.subscribe((data) =>{this.meteoOra = data
      const lat = this.meteoOra.coord.lat
      const lon = this.meteoOra.coord.lon

      this.obsQualitaAria = this.OpenWeather.QualitaAria(lat, lon);
      this.obsQualitaAria.subscribe((data) => {this.qualitaAria = data

        this.date = new Date(this.qualitaAria.list[0].dt * 1000)
        this.data = this.date.toLocaleDateString('it-IT', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric'
        })

        if (this.qualitaAria.list[0].main.aqi == 1){
          this.qualitaText = "Buona"
          
        }else if(this.qualitaAria.list[0].main.aqi == 2){
          this.qualitaText = "Discreta"
        
        }else if(this.qualitaAria.list[0].main.aqi == 3){
          this.qualitaText = "Moderata"

        }else if (this.qualitaAria.list[0].main.aqi == 4){
          this.qualitaText = "Scarsa"
        
        }else if (this.qualitaAria.list[0].main.aqi == 5){
          this.qualitaText = "Pessima"
        }
      });

    })
  }

}
