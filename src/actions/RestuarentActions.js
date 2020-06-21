export const ADD_RESTUARENTS = "ADD_RESTUARENTS";
export const FILTER_RESTUARENTS = "FILTER_RESTUARENTS";

const baseUrl = `http://opentable.herokuapp.com/api/restaurants`;

export function getRestuarents() {
  const countryCode = "?country=us";
  return (dispatch) => {
    fetch(baseUrl + countryCode)
      .then((response) => response.json())
      .then((restaurant) =>
        dispatch({ type: ADD_RESTUARENTS, restaurants: restaurant.restaurants })
      );
  };
}

export function searchRestaurents(cityName) {
  let queryParam = `?city=${cityName}`;
  if (cityName === undefined || cityName === "") queryParam = "?country=us";
  return (dispatch) => {
    fetch(baseUrl + queryParam)
      .then((response) => response.json())
      .then((restaurant) =>
        dispatch({ type: ADD_RESTUARENTS, restaurants: restaurant.restaurants })
      );
  };
}

export function filterRestuarents(filterValue) {
  return {
    type: FILTER_RESTUARENTS,
    filterValue: filterValue.toLowerCase(),
  };
}
