import { combineReducers } from 'redux';
import tripreducer from './tripreducer';
import guidereducer from './guidereducer'
import placereducer from './placereducer';
import activitiesreducer from './activitiesreducer';
const rootReducers = combineReducers({
    trip:tripreducer,

    guide:guidereducer,

    place:placereducer,

    activities:activitiesreducer,

});
export default rootReducers;