
import React, {useState, useEffect} from 'react';


const Nasa = (props) => {
    const [image, setImage] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {

        let key = 'gJdrfi9ftzu4Aix033HWb69oC1hxbDTTiakQXxgs';
        let baseURL = 'https://api.nasa.gov/planetary/earth/imagery';
        let todayDate=  new Date().toISOString().slice(0,10);
    
        let url = `${baseURL}?lon=${props.longitude}&lat=${props.latitude}&date=2020-01-01&&dim=0.10&api_key=${key}`;
        let outside="";

        fetch(url, {
            method: 'GET',
            headers: new Headers({
                'Content-Types': 'application/json'
            })
        })
        .then(res => {
            res.blob();
            console.log(res);
            console.log();
            setImage(res.url);
            setIsLoaded (true);
            // console.log(image);
            // res.json()
        })
        // .then(images => {
        //     // outside = URL.createObjectURL(images)
        //     // console.log(images);
        // })
        .catch(err => console.log(err))
    })

    return (
        <div>
            <h1 className="nasa">NASA LOCATION</h1>
            {!isLoaded ? "" : <img src={image} className="nasaImage" />}
        </div>
    )
}

export default Nasa;