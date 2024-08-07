import React from 'react'

function WeatherInfo({weather, index}) {
      const getDayName = (dateString) => {
    const date = new Date(dateString);
    const options = { weekday: "long" }; // 'long' seçeneği tam gün adını verir
    return date.toLocaleDateString("tr-TR", options);
  };
  return (
    
    <div className="weatherInfo-single">
        <div key={weather.datetime}>
            <p className={"weather"}>
            {getDayName(weather.datetime)}
            <br/>
            {weather.temp} °C
            <br/>
            Feels like: {weather.feelslike}°C
            </p>
        </div>
  
     </div>
  )
}

export default WeatherInfo