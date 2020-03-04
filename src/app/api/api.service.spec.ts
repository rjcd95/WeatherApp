import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { environment } from '../../environments/environment.prod';
const weatherData = require("./tests/weather.json");
const forecastData = require("./tests/forecast.json");


const coord = { lat: 12.0976239, lon: -86.3985472 };
const apiUrl = environment.apiUrl;
const apiKey = environment.apiKey;;
const unit = 'imperial';

describe('Service: Api', () => {
    let injector: TestBed;
    let service: ApiService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ApiService]
        });
        injector = getTestBed();
        service = injector.get(ApiService);
        httpMock = injector.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    describe('#getCurrentWeather', () => {
        it('should return an Observable<CurrentWeatherResponse>', () => {

            const url = `${apiUrl}weather?lat=${coord.lat}&lon=${coord.lon}&units=${unit}&appid=${apiKey}`;
            const dummyWeather = weatherData;

            service.getCurrentWeather(coord.lat, coord.lon)
                .subscribe(response => {
                    expect(response).toEqual(dummyWeather);
                });

            const req = httpMock.expectOne(url);
            expect(req.request.method).toBe("GET");
            req.flush(dummyWeather);
        });
    });

    describe('#getForescast', () => {
        it('should return an Observable<ForeCastResponse>', () => {

            const url = `${apiUrl}forecast?lat=${coord.lat}&lon=${coord.lon}&units=${unit}&appid=${apiKey}`;
            const dummyForecast = forecastData;

            service.getForeCast(coord.lat, coord.lon)
                .subscribe(response => {
                    expect(response).toEqual(dummyForecast);
                });

            const req = httpMock.expectOne(url);
            expect(req.request.method).toBe("GET");
            req.flush(dummyForecast);
        });
    });
});