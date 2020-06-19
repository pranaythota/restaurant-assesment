import React, { Component } from "react";
import CardList from "./Card/card-list-component.jsx";
import "./App.css";
import Searchbox from "./search-box/search-box.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
      searchField:``,
    };

    this.baseUrl = `http:\/\/opentable.herokuapp.com\/api\/restaurants?`;
  this.onSearchSubmit = this.onSearchSubmit.bind(this);
  this.fetchResults = this.fetchResults.bind(this);
   this.onSearchSubmit('toronto');
  };


  


  onSearchSubmit(value){
    // using the city param for more interesting results to play with
    this.url = this.baseUrl + `city=${value}`;

    this.fetchResults(this.url);
}


fetchResults(url){
  fetch(url)
  .then((response) => response.json())
      .then((restaurant) =>
        this.setState({ restaurants: restaurant.restaurants })
      );
}

  // componentDidMount() {
  //   fetch(
  //     `http:\/\/opentable.herokuapp.com\/api\/restaurants?` +
  //       `city=${`toronto`}`
  //   )
  //     .then((response) => response.json())
  //     .then((restaurant) =>
  //       this.setState({ restaurants: restaurant.restaurants })
  //     );
  // }





  render() {

    const{restaurants,searchField}=this.state;
    const filterRestaurants = restaurants.filter(restaurant=>restaurant.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
      <Searchbox onChange={e=>this.setState({searchField:e.target.value})} placeholder={`Enter your city`} onClick={this.state.searchField}/>
        <CardList restaurants={filterRestaurants} />
      </div>
    );
  }
}

export default App;
