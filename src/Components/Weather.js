import React, {useState, useEffect} from 'react';
const key='d404c26261f07ca6331a0f05996b1256'//'1c9f9ca6df370e51f88c4ef3c2165f4d';

const Weather = (props) => {
    const [weatherData, setWeatherData] = useState("");
    // const baseUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=139&lon=35&appid=${key}`

    const baseUrl=`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&exclude={part}&appid=${key}`

    useEffect(()=> {
        fetchWeather();
    })
const fetchWeather =() => {
    fetch(baseUrl, {
        method: "GET",
        headers: new Headers({
            "Content-Type": "application/json"
        })
    })
    .then((res) => res.json())
      .then((json) => {
        console.log(json);
        console.log(json.current.weather[0]);
        setWeatherData(json);
      })
      .catch(err => console.log(err));
}


const mapper = () => {

    for (const each of weatherData) {
        console.log(each);
        return (
            <p>
                <h3>{each.current.weather[0].main}</h3>
                <h3>{each.current.weather[0].description}</h3>
            </p>
        )
    }
  }

    return (
        <div>
           {mapper()}
        </div>
    )
}
export default Weather;