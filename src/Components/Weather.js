import React, {useState, useEffect} from 'react';

const key='1c9f9ca6df370e51f88c4ef3c2165f4d';

const Weather = (props) => {
    const baseUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&exclude={part}&appid=1c9f9ca6df370e51f88c4ef3c2165f4d`
const fetchWeather =() => {
    fetch(baseUrl, {
        method: "GET",
        headers: new Headers({
            "Content-Type": "application/json",
            'access-control-allow-headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
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