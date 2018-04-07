import {combineReducers} from 'redux';
import tripreducer from './tripreducer';
import guidereducer from './guidereducer'
import places from './placereducer';
import activities from './activitiesreducer';
import tripseleted from './tripseleted';
import bookingreducer from './bookingreducer';
import bookingtrip from './bookingtrip';
import bookingtripid from './bookingtripid'
import status from './status'
import authentication from './authentication'
import myplan from './myplanreducer'
const rootReducers = combineReducers({
    trips: tripreducer,
    guides: guidereducer,
    places,
    activities,
    tripseleted: tripseleted,
    bookingdetail:bookingreducer,
    mytrip:bookingtrip,
    status,
    authentication,
    bookingtripid,
    myplan

});
export default rootReducers;