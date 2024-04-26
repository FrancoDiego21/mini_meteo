import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { OpenWeatherAPIService } from '../open-weather-api.service';

@Component({
  selector: 'app-previsioni5-g',
  templateUrl: './previsioni5-g.component.html',
  styleUrls: ['./previsioni5-g.component.css']
})
export class Previsioni5GComponent {
  obs5g : Observable<Object>;
  previsioni: any;
  city: string;

  constructor(public OpenWeather : OpenWeatherAPIService){
  } 

  submit(search: HTMLInputElement): void{
    if (!search.value){
      return;
    }
    this.city = search.value
    this.obs5g = this.OpenWeather.Meteo5G(this.city)
    this.obs5g.subscribe((data) => {this.previsioni = data


    })

  }

}
