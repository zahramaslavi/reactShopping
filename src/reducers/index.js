import { combineReducers } from 'redux';

import products, { getProduct } from './products';
import cart from './cart';


export default combineReducers({products, cart});


export const getCartProducts = (state) => {
    console.log("getCartProducts", state.cart.quantityById);
    return Object.keys(state.cart.quantityById).map(id => getProduct(id, state));
}
    // state.cart.addedIds.map(id => getProduct(id, state))
    
