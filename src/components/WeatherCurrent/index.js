import React from "react";

const WeatherCurrent = ({weatherprop}) =>{

    const getTimefromUnix = (unix) => {
      const hours = new Date(unix * 1000).getHours();
      const minutes = new Date(unix * 1000).getMinutes();
      const twoDigitMinutes = minutes.toString().padStart(2, "0");
      return `${hours}:${twoDigitMinutes}`;
    };

    return(
        <div className={(weatherprop?.main.temp < 10) ? "weather__current--cold" : "weather__current"}>
        <h2 className="weather__city" id="mesto">
            {weatherprop?.name}, {weatherprop?.sys.country}
        </h2>
        <div className="weather__inner weather__inner--center">
          <div className="weather__section weather__section--temp">
            <span className="weather__temp-value" id="teplota">
              {Math.round(weatherprop?.main.temp)}
            </span>
            <span className="weather__temp-unit">°C</span>
            <div className="weather__description" id="popis">
              {weatherprop?.weather[0].main}
            </div>
          </div>
          <div
            className="weather__section weather__section--icon"
            id="ikona"
          >
            <img
              src={`http://openweathermap.org/img/wn/${weatherprop?.weather[0].icon}@2x.png`}
              alt="current weather icon"
            />
          </div>
        </div>
        <div className="weather__inner">
          <div className="weather__section">
            <h3 className="weather__title">Wind</h3>
            <div className="weather__value">
              <span id="wind">{weatherprop?.wind.speed}</span> km/h
            </div>
          </div>
          <div className="weather__section">
            <h3 className="weather__title">Humidity</h3>
            <div className="weather__value">
              <span id="humidity">{weatherprop?.main.humidity}</span> %
            </div>
          </div>
        </div>
        <div className="weather__inner">
          <div className="weather__section">
            <h3 className="weather__title">Sunrise</h3>
            <div className="weather__value">
              <span id="sunrise">{getTimefromUnix(weatherprop?.sys.sunrise)}</span>
            </div>
          </div>
          <div className="weather__section">
            <h3 className="weather__title">Sunset</h3>
            <div className="weather__value">
              <span id="sunset">{getTimefromUnix(weatherprop?.sys.sunset)}</span>
            </div>
          </div>
        </div>
      </div>
    
    )
}

export default WeatherCurrent;
