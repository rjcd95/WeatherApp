import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
    providedIn: 'root',
})
export class UtilsService {

    constructor() { }

    getDate(dt_txt: string) {
        if (!dt_txt) return '';
        return moment(dt_txt, 'YYYY-MM-DD HH:mm:ss').format('ddd, MMM DD, YYYY hh:mm a');
    }

    getImageSrc(weather_main: string, weather_description: string): string {
        const imgSrcBase = '/assets/images/';
        let imgSrc = '';
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
                imgSrc = `${imgSrcBase}dunno.png`
                break;
        }
        return imgSrc;
    }
}
