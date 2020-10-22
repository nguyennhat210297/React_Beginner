import React from 'react';
import './card.style.css'
export  const Card = (props) =>(
    <div className='card-container'>
        <img src={`https://robohash.org/${props.monter1.id}?set=set2&size=180x180`} alt="monster"/>
        <h1>{props.monter1.name}</h1>
<p>{props.monter1.website}</p>
    </div>
);