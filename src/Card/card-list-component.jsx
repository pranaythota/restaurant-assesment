import React from "react";
import "./card-list.style.css";
import Card from "../Card/card-component";

const CardList = (props) => (
  <div className="card-list">
    {props.restaurants.map((restaurant) => (
      <Card key={restaurant.id} restaurant={restaurant} />
    ))}
  </div>
);

export default CardList;
