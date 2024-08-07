import { useEffect, useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
function Weather({ city }) {
  const [weathers, setWeathers] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/next7days?unitGroup=metric&key=XPUAT42EUDSKBPXVX2H9K7SZ9&contentType=json`
      )
      .then((res) => setWeathers(res.data.days))
      .catch((e) => console.log(e));
  }, [city]);

  return (
    <div>
      {city} Hava Durumu
      {weathers.map((weather, index) => (
        <WeatherInfo weather={weather} />
      ))}
    </div>
  );
}

export default Weather;
