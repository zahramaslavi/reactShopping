import { combineReducers } from 'redux';


const byIds = (state = {}, action) => {

    const newState = {...state};

    switch(action.type) {
        case 'RECEIVE_PRODUCTS':
            return {
                ...newState, 
                ...action.products.reduce((obj, product) => {
                    obj[product.id] = product;
                    return obj;
                }, {})
            } 
        case 'ADD_PRODUCT':
            newState[action.payload.id].inventory = Number(newState[action.payload.id].inventory) - Number(action.payload.quantity);
            return newState;
        case 'REMOVE_PRODUCT':
            newState[action.payload.id].inventory =  Number(newState[action.payload.id].inventory)  + Number(action.payload.quantity);

            return newState;
        default: 
            return newState;

    }

}

export default combineReducers({byIds});

export const getProduct = (id, state) => {
    return state.products.byIds[id];
}