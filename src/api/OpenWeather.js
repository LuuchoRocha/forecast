const BASE_URL = 'https://api.openweathermap.org/data/2.5/';
const APP_ID = '0524e1262ef281c481145ada163cc19b';

export default {
  getCurrent(city) {
    return fetch(BASE_URL + 'weather?q=' + city + '&APPID=' + APP_ID);
  },
};
