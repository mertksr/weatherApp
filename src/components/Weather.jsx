import { useEffect, useState, useContext } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import ThemeContext from "../context/ThemeContext";
import {ThemeProvider} from "../context/ThemeContext";

function Weather({ city }) {

  const {theme, setTheme} = useContext(ThemeContext);

  const [weathers, setWeathers] = useState([]);
  useEffect(() => {
    if (city) {
      axios
        .get(
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/next7days?unitGroup=metric&key=XPUAT42EUDSKBPXVX2H9K7SZ9&contentType=json`
        )
        .then((res) => setWeathers(res.data.days))
        .catch((e) => console.log(e));
    }
  }, [city]);

  return (
    <div>
      <h2>
      {city} Weather
      </h2>
      <br />
      <div className={"weatherInfo"}>

      {weathers.map((weather, index) => (
        <WeatherInfo weather={weather} key={index} />
      ))}
      </div>
    </div>
  );
}

export default Weather;
