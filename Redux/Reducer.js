import { combineReducers } from 'redux';
import EmailReducer from './EmailReducer';
import BmiReducer from './BmiReducer';
import Status from './Status';
const RootReducer = combineReducers({
    EmailReducer,
    Status,
    BmiReducer
    
  })
export default RootReducer;