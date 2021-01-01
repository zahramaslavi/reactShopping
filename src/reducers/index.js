import { combineReducers } from 'redux';

import products, { getProduct } from './products';
import cart from './cart';


export default combineReducers({products, cart});


export const getCartProducts = (state) => {
    console.log(state.cart.quantityById);
    return Object.keys(state.cart.quantityById).map(id => getProduct(id, state));
}

export const getTotal = (state) => {
    let total = 0;

    for (const id in state.cart.quantityById) {
        total += getProduct(id, state).price *  state.cart.quantityById[id];
    }

    return total;
}
    
