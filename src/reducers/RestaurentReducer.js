import {
    ADD_RESTUARENTS,
    FILTER_RESTUARENTS,
  } from "../actions/RestuarentActions";
  
  const initialState = { restuarents: [] };
  
  function RestuarentReducer(state = initialState, action) {
    switch (action.type) {
      case ADD_RESTUARENTS:
        return { ...state, restuarents: action.restaurants };
      case FILTER_RESTUARENTS:
        const filteredRestuarents =  state.restuarents.filter((restuarent) =>
          filterCondtionCheck(restuarent, action.filterValue)
        );
        console.log(filteredRestuarents)
        return {restuarents:filteredRestuarents}
      default:
        return state;
    }
  }
  
  function filterCondtionCheck(restuarent, filterValue) {
    return (
      restuarent.name.toLowerCase().includes(filterValue) ||
      restuarent.address.toLowerCase().includes(filterValue) ||
      restuarent.area.toLowerCase().includes(filterValue)
    );
  }
  
  export default RestuarentReducer;
  