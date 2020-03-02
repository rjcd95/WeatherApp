import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ApiService } from './../api/api.service';
import { CurrentWeatherResponse } from '../model/current-weather-response';
import { CurrentWeatherData } from '../model/current-weather-data';

@Component({
  selector: 'app-tab1',
  templateUrl: 'current-weather-tab.page.html',
  styleUrls: ['current-weather-tab.page.scss']
})
export class CurrentWeatherTab {

  constructor(private apiService: ApiService, private geolocation: Geolocation) { }

  data: CurrentWeatherData = {
    temp: 0,
    weather_main: "",
    weather_description: ""
  };

  ngOnInit() {
    this.getCurrentLocation();
  }

  getCurrentLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      let coords = resp.coords;
      this.getCurrentWeather(coords.latitude, coords.longitude)
    }).catch(() => {
      this.getCurrentWeather()
    });
  }

  getCurrentWeather(lat?: number, lon?: number) {
    lat = lat || 12.0976239;
    lon = lon || -86.3985472;
    this.apiService.getCurrentWeather(lat, lon)
      .subscribe((response: CurrentWeatherResponse) => {
        this.data = {
          temp: response.main.temp,
          weather_main: response.weather[0].main,
          weather_description: response.weather[0].description
        };
      });
  }

}
