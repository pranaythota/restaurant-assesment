import React from "react";
import "./search-box.css";

const Searchbox = ({ placeholder, handleChange, onSubmit,handleKeyDown}) => (
  <div className="search-container">
    <div>
     
      <input
        className="search-bar"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <input type="submit" className="search-submit" onClick={onSubmit} />
    </div>
  </div>
);

export default Searchbox;
