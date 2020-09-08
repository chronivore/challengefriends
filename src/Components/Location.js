import React, {useState, useEffect} from 'react';


const Location = () => {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    navigator.geolocation.getCurrentPosition(function(position) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        // console.log("Latitude is :", latitude);
        // console.log("Longitude is :", longitude);
      });

    return (
        <div>
            <h2>{latitude}</h2>
            <h2>{longitude}</h2>
        </div>
    )
}

export default Location;