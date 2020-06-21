import React from "react";
import "./empty-data.css";
const EmptyData = (props) => {
  return (
    <div className="container">
      <h3>{props.message}</h3>
    </div>
  );
};
export default EmptyData;
