import { API_PLACEBYACTIVITIES, FILTER_PLACE, ADDTO_ARRAY,API_ACTIVITIES} from '../action/api';
import _ from 'lodash'

export default function (state = [], action) {
  switch (action.type) {
    
    case
    API_PLACEBYACTIVITIES:
      const {payload, onselect} = action
      
      state = _.differenceBy(payload.places, onselect, 'id');
      
      return state
    
    case
    FILTER_PLACE:
      console.log(this)
      return state.filter(data => data.id === parseInt(action.payload));
    case
    ADDTO_ARRAY:
      return state, []
    case
    API_ACTIVITIES:
      return state, []
    default:
      return state
  }
  return state;
}