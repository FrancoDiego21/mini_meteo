import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { OpenWeatherAPIService } from '../open-weather-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  obsMeteoOra : Observable<Object>;
  obsGeoC : Observable<Object>;
  obsQualitaAria : Observable<Object>;
  obsMeteo5g : Observable<Object>;
  meteo5G: any;
  qualitaAria : any;
  geoC : any;
  city: string;
  res: any;
  qualitaText : string;
  data: Date; 
  
  constructor(public OpenWeather : OpenWeatherAPIService){
  } 

  submit(search:HTMLInputElement):void{
    if (!search.value){
      return;
    }
    this.city = search.value;
    this.obsMeteoOra = this.OpenWeather.MeteoOra(this.city);
    this.obsMeteoOra.subscribe((data)=>{this.res=data
      this.data = new Date(this.res.dt * 1000)
      console.log(this.data)

    });

    this.obsGeoC = this.OpenWeather.GetCoordinate(this.city);
    this.obsGeoC.subscribe((data) => {this.geoC=data
      const lat = this.geoC[0].lat;
      const lon = this.geoC[0].lon

      this.obsQualitaAria = this.OpenWeather.QualitaAria(lat, lon);
      this.obsQualitaAria.subscribe((data) => {this.qualitaAria = data
        
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
      })

      this.obsMeteo5g = this.OpenWeather.Meteo5GHome(this.city);
      this.obsMeteo5g.subscribe((data) => {this.meteo5G = data});


  
  
    });
    


    
  }
}
