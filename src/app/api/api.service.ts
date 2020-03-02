import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurrentWeatherResponse } from '../model/current-weather-response';
import { ForeCastResponse } from '../model/forecast-response';

const apiUrl = 'https://api.openweathermap.org/data/2.5/'
const apiKey = 'a3f4197c3aadb3b96726a0095b59b08e';
const unit = '&units=imperial';

@Injectable({
    providedIn: 'root',
})
export class ApiService {

    constructor(private http: HttpClient) { }

    getCurrentWeather(lat: number, long: number): Observable<CurrentWeatherResponse> {
        const url = `${apiUrl}weather?lat=${lat}&lon=${long}&${unit}&appid=${apiKey}`;
        return this.http.get<CurrentWeatherResponse>(url);
    }

    getForeCast(lat: number, long: number): Observable<ForeCastResponse> {
        const url = `${apiUrl}forecast?lat=${lat}&lon=${long}&${unit}&appid=${apiKey}`;
        return this.http.get<ForeCastResponse>(url);
    }
}
