import { UtilsService } from "./utils.service";
import * as moment from 'moment';

describe("Service: Utils", () => {
    let utilsService;
    const currentFormat = 'YYYY-MM-DD HH:mm:ss';
    const finalFormat = 'ddd, MMM DD, YYYY hh:mm a';

    beforeEach(() => {
        utilsService = new UtilsService();
    });

    afterEach(() => {
        utilsService = null;
    });

    it("should have to be a dunno image", () => {
        let imageSrc = utilsService.getImageSrc();
        expect(imageSrc).toBe('/assets/images/dunno.png');
    });

    it("should have to be a cloudy image", () => {
        let imageSrc = utilsService.getImageSrc('Clouds', 'few clouds');
        expect(imageSrc).toBe('/assets/images/cloudy.png');
    });

    it("should have to be a overcast image", () => {
        let imageSrc = utilsService.getImageSrc('Clouds', 'overcast');
        expect(imageSrc).toBe('/assets/images/overcast.png');
    });

    it("should have to be a empty string", () => {
        let date = utilsService.getDate();
        expect(date).toBe('');
    });

    it("should have to be a empty string", () => {
        const dateToValidate = '2020-03-04 09:00:00';
        let dateWithFormat = moment(dateToValidate, currentFormat).format(finalFormat);
        let date = utilsService.getDate(dateToValidate);
        expect(date).toBe(dateWithFormat);
    });
});