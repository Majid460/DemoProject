import {GET_STATUS} from './Actions';


function Status(state={status:false},action)
{
    switch(action.type)
    {
     case GET_STATUS:
          return{...state,status:action.payload};
        default:
          return state;    
    }
    
}
export default Status;