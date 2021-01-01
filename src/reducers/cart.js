import { combineReducers } from 'redux';

// const initialState = {
//     quantityById: {}
// }


// const cart = (state = initialState, action) => {
const quantityById = (state = {}, action) => {

    const newState = {...state};

    switch (action.type) {
        case 'ADD_PRODUCT':
            if ( !newState[action.id] )
            {
                
                newState[action.id] = 1;
            } else {
                newState[action.id]++;
            }
            
            return newState;
        case 'REMOVE_PRODUCT':
            if ( newState[action.id] > 1 ) {
                newState[action.id]--;
            } else {
                delete newState[action.id];
            }
            return newState;
        case 'CHECKOUT_SUCCESS':
            return {};
        default:
            return newState;
    }

}

//example of cart view state
const requesting = (state = false, action) => {
    switch (action.type) {
        case 'CHECKOUT_REQUEST':
            return true;
        default:
            return false;
    }
}

export default combineReducers({quantityById, requesting});

export const quantity = (productId) => quantityById[productId];