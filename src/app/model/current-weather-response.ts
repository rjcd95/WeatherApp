import { Temperature } from './temperature';
import { Weather } from './weather';

export interface CurrentWeatherResponse {
    weather: Weather[];
    main: Temperature;
}