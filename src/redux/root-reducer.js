import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import shopReducer from './shop/shop.reducer';



const rootReducer = combineReducers({
  shop:shopReducer
})

export default rootReducer