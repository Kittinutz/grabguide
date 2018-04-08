import {API_PLACE, API_PLACEBYACTIVITIES, FILTER_PLACE, ADDTO_ARRAY} from '../action/api';

export default function (state = [], action) {
  switch (action.type) {
    case
    API_PLACE:
      return {...state, places: action.payload};
    case
    API_PLACEBYACTIVITIES:
      const {places} = action.payload;
      return state, places;
    
    case
    FILTER_PLACE:
      console.log(this)
      return state.filter(data => data.id === parseInt(action.payload))
      
      return state;
    default:
      return state
  }
  return state;
}