import { configureStore } from '@reduxjs/toolkit'
import RootReducer from '../Redux/Reducer'

const store= configureStore({
  reducer: RootReducer})
 
  export default store;