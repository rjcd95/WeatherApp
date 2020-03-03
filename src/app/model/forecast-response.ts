import { Temperature } from './temperature';
import { Weather } from './weather';

interface ForeCastList {
    main: Temperature;
    weather: Weather[];
    dt_txt: string;
}

interface City {
    name: string;
    country: string;
}

export interface ForeCastResponse {
    cod: string;
    message: number;
    cnt: number;
    list: ForeCastList[];
    city: City;
}