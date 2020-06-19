import React from "react";
import './card.style.css'

const Card = (props) => (
  <div className='card-container'>
    <h1> {props.restaurant.name} </h1>
    <p>{props.restaurant.address}</p>
    <h2>
         Price:{props.restaurant.price}$
    </h2>
  </div>
);

export default Card;
