import './App.css';
import Weather from './components/Weather'
import City from './components/Cities'
import {useState} from 'react'
function App() {
  const [selectedCity, setSelectedCity] = useState('');

  return (
    
    <div className="App">
      <City onCitySelect={setSelectedCity}/>
      <Weather city={selectedCity}/>

    </div>
  );
}

export default App;
