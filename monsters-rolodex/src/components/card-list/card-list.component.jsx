import React from 'react';
import './card-list.style.css';
import {Card} from '../card/card.component';

export const CardList = (props) => {
    console.log(props); 
    return(
        <div className='card-list'>
           {
               props.nhat.map(monter1=>(
               <Card key={monter1.id} monter1={monter1}/>
               ))
           }
        </div>
    )
}