import { Temperature } from './temperature';
import { Weather } from './weather';

export interface currentWeatherResponse {
    weather: Weather[];
    main: Temperature;
}