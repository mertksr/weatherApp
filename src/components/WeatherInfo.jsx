import React from 'react'

function WeatherInfo({weather}) {
      const getDayName = (dateString) => {
    const date = new Date(dateString);
    const options = { weekday: "long" }; // 'long' seçeneği tam gün adını verir
    return date.toLocaleDateString("tr-TR", options);
  };
  return (
    
    <div className="weatherInfo">
        <div key={weather.datetime}>
            <p>
            {getDayName(weather.datetime)}
            <br/>
            {weather.temp} °C
            <br/>
            Hissedilen: {weather.feelslike}°C
            </p>
        </div>
  
     </div>
  )
}

export default WeatherInfo