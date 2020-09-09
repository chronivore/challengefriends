import React, {useState, useEffect} from 'react';
const key='1c9f9ca6df370e51f88c4ef3c2165f4d';

const Weather = (props) => {
    const baseUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=139&lon=35&exclude={part}&appid=${key}`

    
const fetchWeather =() => {
    fetch(baseUrl, {
        method: "GET",
        headers: new Headers({
            "Content-Type": "application/json",
            'access-control-allow-origin': '*',
            'access-control-allow-headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
            'access-control-allow-methods': 'GET, POST, PUT, DELETE'

        })
    })
    .then((res) => res.json())
      .then((json) => {
        console.log(json);
      })
      .catch(err => console.log(err));

}

    return (
        <div>
           { fetchWeather() }
        </div>
    )
}

export default Weather;