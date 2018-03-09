import { combineReducers } from 'redux';
import tripreducer from './tripreducer';
import guidereducer from './guidereducer'
import placereducer from './placereducer';
const rootReducers = combineReducers({
    trip:tripreducer,
    guide:guidereducer,
    place:placereducer

});
export default rootReducers;