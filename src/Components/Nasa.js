import React, {useState, useEffect} from 'react';


const Nasa = (props) => {
    const [image, setImage] = useState(null);


    let key = 'gJdrfi9ftzu4Aix033HWb69oC1hxbDTTiakQXxgs';
    let baseURL = 'https://api.nasa.gov/planetary/earth/imagery';

    useEffect(() => {

        let key = 'gJdrfi9ftzu4Aix033HWb69oC1hxbDTTiakQXxgs';
        let baseURL = 'https://api.nasa.gov/planetary/earth/imagery';
        let url = `${baseURL}/${props.latitude}/${props.longitude}/${key}`;
        fetch(url, {
            method: 'GET',
            headers: new Headers({
                'Content-Types': 'application/json'
            })
        })
        .then(res => res.json())
        .then(json => { console.log(json); setInventory(json) })
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <img href={json.image} />
        </div>
    )
}

export default Nasa;

