import {GET_EMAIL,GET_HEIGHT,GET_WEIGHT} from './Actions';


function EmailReducer(state={email:''},action)
{
    switch(action.type)
    {
     case GET_EMAIL:
          return{...state,email:action.payload};
        default:
          return state;    
    }
    
}
export default EmailReducer;

 