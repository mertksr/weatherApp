import { useContext, useState } from "react";
import ThemeContext from "../context/ThemeContext";
function ThemeChanger() {
  const { theme, setTheme } = useContext(ThemeContext);
  return <div className={"themeChanger"}> 
   Active Theme: {theme}
   <br />
  <button onClick={() => setTheme(theme==="dark" ? "light" : "dark")}>
    Change Theme
    </button>
    
    </div>
}

export default ThemeChanger;
