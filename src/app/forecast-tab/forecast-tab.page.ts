import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
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

  isLoading: boolean;
  data: Array<ForeCastData> = [];
  skeletonIndexs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  refreshEvent: any;
  cityName: string = "";

  ngOnInit() {
    this.getCurrentLocation();
  }

  doRefresh(event) {
    this.refreshEvent = event;
    this.getCurrentLocation();
  }

  getCurrentLocation() {
    this.isLoading = true;
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
      .subscribe(
        (response: ForeCastResponse) => {
          let dataResponse = response.list;
          this.cityName = `${response.city.name}, ${response.city.country}`;
          dataResponse.forEach(item => {
            let image = this.utilsService.getImageSrc(item.weather[0].main, item.weather[0].description);
            let forecast = {
              weather_main: item.weather[0].main,
              weather_description: item.weather[0].description,
              date: this.utilsService.getDate(item.dt_txt),
              temp_min: item.main.temp_min,
              temp_max: item.main.temp_max,
              image: image
            };
            this.data.push(forecast);
          })
          this.completeLoading();
        }, () => {
          this.completeLoading();
        });
  }

  completeLoading() {
    this.isLoading = false;
    if (this.refreshEvent) {
      this.refreshEvent.target.complete();
    }
  }
}
