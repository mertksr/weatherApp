import { useState,useContext } from "react";
import Weather from "./Weather";
import City from "./Cities";
import ThemeChanger from './ThemeChanger'
import ThemeContext from '../context/ThemeContext'
function Container() {
    const [selectedCity, setSelectedCity] = useState("");
    const {theme} = useContext(ThemeContext);
  return (
    
    <div className={theme}>
      <ThemeChanger />
      <div className="App">
        <City onCitySelect={setSelectedCity} />
        <Weather city={selectedCity} />
      </div>
    </div>
  );
}

export default Container;
