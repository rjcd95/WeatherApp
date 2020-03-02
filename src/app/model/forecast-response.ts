import { Temperature } from './temperature';
import { Weather } from './weather';

interface ForeCastList {
    main: Temperature;
    weather: Weather[];
    dt_txt: string;
}

export interface ForeCastResponse {
    cod: string;
    message: number;
    cnt: number;
    list: ForeCastList[];
}