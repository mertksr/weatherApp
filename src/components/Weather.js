import { useEffect, useState } from 'react';
import axios from 'axios';

function Weather({city}) {

  const [weathers, setWeathers] = useState([]);  
  useEffect(() => {
    axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/next7days?unitGroup=metric&key=XPUAT42EUDSKBPXVX2H9K7SZ9&contentType=json`)
      .then((res) => setWeathers(res.data.days))
      .catch((e) => console.log(e));
  }, [city]);
  const getDayName = (dateString) => {
    const date = new Date(dateString);
    const options = { weekday: 'long' }; // 'long' seçeneği tam gün adını verir
    return date.toLocaleDateString('tr-TR', options);
  };
  return (
    <div>
         {city} Hava Durumu
        <div className="weatherInfo">
         {weathers.map((weather, index)=>(
            <div key={weather.datetime}>
                <p>
                {getDayName(weather.datetime)}
                <br/>
                {weather.temp} °C
                <br/>
                Hissedilen: {weather.feelslike}°C
                </p>
            </div>
         ))}
         </div>
    </div>
  );
}

export default Weather;
