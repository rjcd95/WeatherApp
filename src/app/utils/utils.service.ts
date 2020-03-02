import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class UtilsService {

    constructor() { }

    getImageSrc(weather_main: string, weather_description: string): string {
        const imgSrcBase = '/assets/images/';
        let imgSrc = `${imgSrcBase}dunno.png`;
        switch (weather_main) {
            case 'Clouds':
                imgSrc = (weather_description == 'few clouds') ? `${imgSrcBase}cloudy.png`
                    : `${imgSrcBase}overcast.png`
                break;
            case 'Thunderstorm':
                imgSrc = `${imgSrcBase}tstorm.png`
                break;
            case 'Drizzle':
                imgSrc = `${imgSrcBase}light-rain.png`
                break;
            case 'Rain':
                imgSrc = `${imgSrcBase}shower.png`
                break;
            case 'Snow':
                imgSrc = `${imgSrcBase}snow.png`
                break;
            case 'Fog':
                imgSrc = `${imgSrcBase}fog.png`
                break;
            case 'Clear':
                imgSrc = `${imgSrcBase}sunny.png`
                break;
            case 'Tornado':
                imgSrc = `${imgSrcBase}sunny-tstorm.png`
                break;
            case 'Mist':
                imgSrc = `${imgSrcBase}switch.png`
                break;

            default:
                break;
        }
        return imgSrc;
    }
}
