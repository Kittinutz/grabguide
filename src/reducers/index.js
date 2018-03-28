import {combineReducers} from 'redux';
import tripreducer from './tripreducer';
import guidereducer from './guidereducer'
import placereducer from './placereducer';
import activitiesreducer from './activitiesreducer';
import tripseleted from './tripseleted';
import bookingreducer from './bookingreducer';
import bookingtrip from './bookingtrip';
import status from './status'
const rootReducers = combineReducers({
    trips: tripreducer,
    guides: guidereducer,
    place: placereducer,
    activities: activitiesreducer,
    tripseleted: tripseleted,
    bookingdetail:bookingreducer,
    mytrip:bookingtrip,
    status

});
export default rootReducers;