import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import * as moment from 'moment';
import { ApiService } from '../api/api.service';
import { ForeCastResponse } from '../model/forecast-response';
import { ForeCastData } from '../model/forecast-data';
import { UtilsService } from '../utils/utils.service';

@Component({
  selector: 'app-forecast',
  templateUrl: 'forecast-tab.page.html',
  styleUrls: ['forecast-tab.page.scss']
})
export class ForecastTabPage {

  constructor(private apiService: ApiService, private utilsService: UtilsService,
    private geolocation: Geolocation) { }

  data: Array<ForeCastData> = [];

  ngOnInit() {
    this.getCurrentLocation();
  }

  getCurrentLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      let coords = resp.coords;
      this.getForeCast(coords.latitude, coords.longitude)
    }).catch(() => {
      this.getForeCast()
    });
  }

  getForeCast(lat?: number, lon?: number) {
    lat = lat || 12.0976239;
    lon = lon || -86.3985472;
    this.apiService.getForeCast(lat, lon)
      .subscribe((response: ForeCastResponse) => {
        let dataResponse = response.list;
        dataResponse.forEach(item => {
          let image = this.utilsService.getImageSrc(item.weather[0].main, item.weather[0].description);
          let forecast = {
            weather_main: item.weather[0].main,
            weather_description: item.weather[0].description,
            date: moment(item.dt_txt, 'YYYY-MM-DD hh:mm:ss').format('ddd, MMM DD, YYYY'),
            temp_min: item.main.temp_min,
            temp_max: item.main.temp_max,
            image: image
          };
          this.data.push(forecast);
        })
      });
  }
}
