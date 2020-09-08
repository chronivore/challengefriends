import React, {useState, useEffect} from 'react';
import './App.css';
import Location from "./Components/Location";
import Temperature from "./Components/Temperature";
import Restaurant from "./Components/Restaurant";
import Nasa from "./Components/Nasa";
import Weather from "./Components/Weather";

function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      console.log(latitude, longitude);
    });
  }, []);

  

  return (
    <div>
        <Restaurant latitude={latitude} longitude={longitude}/>
    </div>
  );
}

export default App;
