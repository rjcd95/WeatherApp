import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { currentWeatherResponse } from '../model/current-weather-response';

const apiUrl = 'https://api.openweathermap.org/data/2.5/'
const apiKey = 'a3f4197c3aadb3b96726a0095b59b08e';
const unit = '&units=imperial';

@Injectable({
    providedIn: 'root',
})
export class ApiService {

    constructor(private http: HttpClient) { }

    getCurrentWeather(location: string): Observable<currentWeatherResponse> {
        const url = `${apiUrl}weather?q=${location}&${unit}&appid=${apiKey}`;
        return this.http.get<currentWeatherResponse>(url);
    }
}
