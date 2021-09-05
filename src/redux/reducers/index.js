import { combineReducers } from 'redux';
import message from './message_reducer';
import { cartReducer } from "./cartReducers";
import {
    getProductsReducer,
    getProductDetailsReducer,
  } from "./productReducers";
const rootReducer = combineReducers({
    message,
    cart: cartReducer,
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
});

export default rootReducer;