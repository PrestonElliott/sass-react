import React, { useState } from 'react'
import stoplightImage from './david-watkis-LwRUp8vJJI8-unsplash.jpg'

export default function Stoplight() {
    const [color, setColor] = useState('Red Light!')

    return (
        <div className="top-container">
            <h1 className="title">Stoplight!</h1>
            <img 
                id="stoplight-image"
                src={stoplightImage}
                alt="stoplight"


            />
            <button className="green" onClick={() => setColor('Green Light!')}>Green</button>
            <button className="yellow" onClick={() => setColor('Yellow Light!')}>Yellow</button>
            <button className="red" onClick={() => setColor('Red Light!')}>Red</button>
            <h3>{color}</h3>
            
        </div>

    )

}