import { Temperature } from './temperature';
import { Weather } from './weather';

interface Sys {
    country: string;
}

export interface CurrentWeatherResponse {
    weather: Weather[];
    main: Temperature;
    name: string;
    sys: Sys
}