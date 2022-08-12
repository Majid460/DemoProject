import {GET_HEIGHT,GET_WEIGHT} from './Actions';

const initialState={
    
}
function BmiReducer(state={Height:'',Weight:''},action)
{
   switch(action.type)
   {
    case GET_HEIGHT:
         return{...state,Height:action.payload};
    case GET_WEIGHT:
         return{...state,Weight:action.payload};
       default:
         return state;    
   }
   
}
export default BmiReducer;
