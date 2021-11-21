import React from 'react';

const WeatherForecast = ({day, temp}) => {

    return(
        <>
        
            
              <div className="forecast__day">{day}</div>
              <div className="forecast__icon">
                {/* <img
                  src={URL FROM OPEN WEATHER}
                  style={{ height: "100%" }}
                  alt="current weather icon"
                /> */}
              </div>
              <div className="forecast__temp">{temp} °C</div>
            
        
        </>
    )
}

export default WeatherForecast;