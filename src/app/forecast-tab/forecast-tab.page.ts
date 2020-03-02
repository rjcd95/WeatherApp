import { Component } from '@angular/core';
import { ApiService } from '../api/api.service';
import { ForeCastResponse } from '../model/forecast-response';
import { ForeCastData } from '../model/forecast-data';
import * as moment from 'moment';

@Component({
  selector: 'app-forecast',
  templateUrl: 'forecast-tab.page.html',
  styleUrls: ['forecast-tab.page.scss']
})
export class ForecastTabPage {

  constructor(private apiService: ApiService) { }

  data: Array<ForeCastData> = [];
  ngOnInit() {
    this.getForeCast();
  }

  getForeCast() {
    const currentLocation = 'Managua,NI';
    this.apiService.getForeCast(currentLocation)
      .subscribe((response: ForeCastResponse) => {
        let dataResponse = response.list;
        console.log('dataResponse', dataResponse);
        dataResponse.forEach(item => {
          let forecast = {
            weather_main: item.weather[0].main,
            weather_description: item.weather[0].description,
            date: moment(item.dt_txt, 'YYYY-MM-DD hh:mm:ss').format('ddd, MMM DD, YYYY'),
            temp_min: item.main.temp_min,
            temp_max: item.main.temp_max
          }
          this.data.push(forecast);
        })
      });
  }
}
