import { status } from './status'

export const api = (e) => {
  try {
    e.preventDefault();

    const weatherData = (icon, country, main, description, feels_like, humidity, pressure, temp, temp_max, temp_min, clouds, deg, speed) => ({
      icon, country, main, description, feels_like, humidity, pressure, temp, temp_max, temp_min, clouds, deg, speed
    });

    const init = (city, units, apikey = '16b763577392ee505e23d81e111408f0') => ({
      city, units, apikey
    });

    const units = document.getElementById('toggle-status').checked ? 'imperial' : 'metric';
    // const data = init(e.target.elements.name.value, units)
    const data = init(document.getElementById('location-name').value, units)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${data.city}&units=${data.units}&appid=${data.apikey}`
    console.log(url)

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        window.weather = weatherData(data.weather[0].icon, data.sys.country, data.weather[0].main, data.weather[0].description, data.main.feels_like, data.main.humidity, data.main.pressure, data.main.temp, data.main.temp_max, data.main.temp_min, data.clouds.all, data.wind.deg, data.wind.speed)
        window.icon = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`
        status();
      });

    return {
      units,
    }
  } catch (e) {
    console.log('Api called!')
  }

}

// export default ;
