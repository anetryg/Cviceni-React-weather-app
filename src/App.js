import React, {useEffect, useState} from "react";
import "./App.css";
import WeatherCurrent from './components/WeatherCurrent';
import WeatherForecast from './components/WeatherForecast';
import cities from './utils/cities';


const App = () => {
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [city, setCity] = useState('Trebenice')

  const id = process.env.REACT_APP_MY_API_ID

  const fetchWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${id}`)
    .then(response => response.json())
    .then(data => setWeather(data));
  }

  const fetchForecast = () => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${id}`)
    .then(response => response.json())
    .then(data => setForecast(data.list.filter((_, index) => index % 8 === 0)));
  }

  useEffect(() => {
    fetchWeather();
  }, [city]);

  
  useEffect(() => {
    fetchForecast();
  }, [city]);


  return (
    <div className="App">
      <div className="container">
        <h1>My Weather App </h1>
        <div className="select-wrapper">
          <select
            className="select"
            name="cityselect"
            id="cityselect"
            value={city}
            onChange={({target}) => setCity(target.value)}
          >
            {cities.map(cityList => <option key={cityList} value={cityList}>{cityList}</option>)}
            
          </select>
        </div>
          <WeatherCurrent weatherprop={weather} />
          <div  className="weather__forecast" id="predpoved" >
          {forecast?.map(lst => {return <div className="forecast" key={lst.dt}>{<WeatherForecast day={lst.dt} temp={lst.main.temp}/>}</div>})}
          </div>
      </div>
    </div>
  );
};

export default App;
