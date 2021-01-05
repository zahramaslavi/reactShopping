import { combineReducers } from 'redux';

const quantityById = (state = {}, action) => {

    const newState = {...state};

    switch (action.type) {
        case 'ADD_PRODUCT':
            if ( !newState[action.payload.id] )
            {
                newState[action.payload.id] = Number(action.payload.quantity);
            } else {
                newState[action.payload.id] = Number(newState[action.payload.id]) + Number(action.payload.quantity);
            }
            
            return newState;
        case 'REMOVE_PRODUCT':
            if ( newState[action.payload.id] ) {
                if ( newState[action.payload.id] > 1 && newState[action.payload.id] != action.payload.quantity ) {
                    newState[action.payload.id] = Number(newState[action.payload.id]) - Number(action.payload.quantity);
                } else {
                    delete newState[action.payload.id];
                }
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