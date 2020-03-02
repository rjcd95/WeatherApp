import { Component } from '@angular/core';
import { ApiService } from './../api/api.service';
import { CurrentWeatherResponse } from '../model/current-weather-response';
import { CurrentWeatherData } from '../model/current-weather-data';

@Component({
  selector: 'app-tab1',
  templateUrl: 'current-weather-tab.page.html',
  styleUrls: ['current-weather-tab.page.scss']
})
export class CurrentWeatherTab {

  constructor(private apiService: ApiService) { }

  data: CurrentWeatherData = {
    temp: 0,
    weather_main: "",
    weather_description: ""
  };

  ngOnInit() {
    this.getCurrentWeather();
  }

  getCurrentWeather() {
    const currentLocation = 'Managua,NI';
    this.apiService.getCurrentWeather(currentLocation)
      .subscribe((response: CurrentWeatherResponse) => {
        this.data = {
          temp: response.main.temp,
          weather_main: response.weather[0].main,
          weather_description: response.weather[0].description
        };
      });
  }

}
