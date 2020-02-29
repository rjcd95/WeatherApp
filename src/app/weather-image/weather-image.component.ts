import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-image',
  templateUrl: './weather-image.component.html',
  styleUrls: ['./weather-image.component.scss'],
})
export class WeatherImageComponent implements OnInit {
  @Input() weather_main: string;
  @Input() weather_description: string;

  constructor() { }

  ngOnInit() { }

}
