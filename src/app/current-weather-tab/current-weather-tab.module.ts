import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CurrentWeatherTab } from './current-weather-tab.page';
import { WeatherImageComponentModule } from '../weather-image/weather-image.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    WeatherImageComponentModule,
    RouterModule.forChild([{ path: '', component: CurrentWeatherTab }])
  ],
  declarations: [CurrentWeatherTab]
})
export class CurrentWeatherTabModule { }
