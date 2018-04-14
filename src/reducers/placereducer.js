import {API_PLACE, API_PLACEBYACTIVITIES, FILTER_PLACE, ADDTO_ARRAY} from '../action/api';

export default function (state = [], action) {
  switch (action.type) {
 
    case
    API_PLACEBYACTIVITIES:
      return action.payload.places;
    
    case
    FILTER_PLACE:
      console.log(this)
      return state.filter(data => data.id === parseInt(action.payload))
    default:
      return state
  }
  return state;
}