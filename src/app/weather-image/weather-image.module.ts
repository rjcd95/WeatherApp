import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeatherImageComponent } from './weather-image.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [WeatherImageComponent],
  exports: [WeatherImageComponent]
})
export class WeatherImageComponentModule { }
