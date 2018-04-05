import {combineReducers} from 'redux';
import tripreducer from './tripreducer';
import guidereducer from './guidereducer'
import placereducer from './placereducer';
import activitiesreducer from './activitiesreducer';
import tripseleted from './tripseleted';
import bookingreducer from './bookingreducer';
import bookingtrip from './bookingtrip';
import bookingtripid from './bookingtripid'
import status from './status'
import authentication from './authentication'

const rootReducers = combineReducers({
    trips: tripreducer,
    guides: guidereducer,
    place: placereducer,
    activities: activitiesreducer,
    tripseleted: tripseleted,
    bookingdetail:bookingreducer,
    mytrip:bookingtrip,
    status,
    authentication,
    bookingtripid

});
export default rootReducers;