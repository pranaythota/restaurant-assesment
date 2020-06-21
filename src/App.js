import React, { Component } from "react";
import "./App.css";
import Searchbox from "./components/search-box/search-box.jsx";
import Restuarents from "./views/Restuarents.js";
import { searchRestaurents ,filterRestuarents} from "./actions/RestuarentActions";
import { connect } from "react-redux";

class App extends Component {
  state = { city: "" ,searchField:""};
  searchResturant = () => {
    this.props.searchRestaurents(this.state.city);
  };

  handleKeyDown = (event) => {
    if ((event.which === 13 || event.keyCode === 13) && this.state.city !== "") {
      this.props.searchRestaurents(this.state.city);
    }
  };
  handCityInputChange = (event) => {
    
    this.setState({ city: event.target.value });
  };

  handleFilterSearch = (event) => {
    
    this.setState({ searchField: event.target.value });
  } 

  filterRestuarents = () => {
    if(this.state.searchField ==='' && this.state.city !== "" )
        this.props.searchRestaurents(this.state.city)
    this.props.filterRestuarents(this.state.searchField)
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Searchbox
          name="city"
          handleChange={this.handCityInputChange}
          placeholder="Enter your city"
          handleKeyDown={this.handleKeyDown}
          onSubmit={this.searchResturant}
        />
        <Searchbox
          handleChange={this.handleFilterSearch}
          placeholder={`Search by Name address or area`}
          onSubmit={this.filterRestuarents}
        />
        <Restuarents />
      </div>
    );
  }
}

export default connect(null, { searchRestaurents,filterRestuarents })(App);
