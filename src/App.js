import React, {useState, useEffect} from 'react';
import './App.css';
import Location from "./Components/Location";
import Temperature from "./Components/Temperature";
import Restaurant from "./Components/Restaurant";
import Nasa from "./Components/Nasa";
import Weather from "./Components/Weather";
import Navbar from './Components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './Components/Home';

function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const [isLocationLoaded, setIsLocationLoaded] = useState(false);

  let lat = "";
  let lon = "";

  useEffect(() => {

    const success = (pos) => {
      const crd = pos.coords;
      setLatitude( crd.latitude);
      setLongitude(crd.longitude);
      setIsLocationLoaded(true);
    }
    
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  

  return (
    <div className="mainDiv">
      
      <Router>
      <Navbar latitude={latitude} longitude={longitude} isLocationLoaded={isLocationLoaded}/>
      </Router>

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
        <Weather latitude={latitude} longitude={longitude}/>

    </div>
  );
}
export default App;