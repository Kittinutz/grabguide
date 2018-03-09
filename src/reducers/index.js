import { combineReducers } from 'redux';
import tripreducer from './tripreducer';
import guidereducer from './guidereducer'
const rootReducers = combineReducers({
    trip:tripreducer,
    guide:guidereducer,
});
export default rootReducers;