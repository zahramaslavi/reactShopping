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
            newState[action.id].inventory --;
            console.log(action.type, newState[action.id])
            return newState;
        case 'REMOVE_PRODUCT':
            newState[action.id].inventory ++;

            return newState;
        default: 
            return newState;

    }

}

export default combineReducers({byIds});

export const getProduct = (id, state) => {
    console.log('id', id, state.products.byIds[id])
    return state.products.byIds[id];
}