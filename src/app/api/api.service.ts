import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurrentWeatherResponse } from '../model/current-weather-response';
import { ForeCastResponse } from '../model/forecast-response';
import { environment as env } from '../../environments/environment';

const apiUrl = env.apiUrl;
const apiKey = env.apiKey;;
const unit = 'imperial';

@Injectable({
    providedIn: 'root',
})
export class ApiService {

    constructor(private http: HttpClient) { }

    getCurrentWeather(lat: number, lon: number): Observable<CurrentWeatherResponse> {
        const url = `${apiUrl}weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${apiKey}`;
        return this.http.get<CurrentWeatherResponse>(url);
    }

    getForeCast(lat: number, lon: number): Observable<ForeCastResponse> {
        const url = `${apiUrl}forecast?lat=${lat}&lon=${lon}&units=${unit}&appid=${apiKey}`;
        return this.http.get<ForeCastResponse>(url);
    }
}
