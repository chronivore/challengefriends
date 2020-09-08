import React, {useState, useEffect} from 'react';

const Temperature = (props) => {
    const [Temperature, setTemperature] = useState('');

    const renderButton = () => {
        
        return props.temp ? 
        (
            <button onClick={toggleTemp}>{`${Math.floor(props.temp - 273.15)} ${Temperature}`}</button>
        )
        : null
    }

    const toggleTemp =() => {
        setTemperature('C');
        return Temperature === 'F' ? 'C' : 'F';
    }



    return (
        <div>
         {renderButton}

        </div>
    )
}

export default Temperature;
