

const initialState = {
    quantityById: {}
}


const cart = (state = initialState, action) => {

    const newState = {...state};

    switch (action.type) {
        case 'ADD_PRODUCT':
            if ( !newState.quantityById[action.id] )
            {
                
                newState.quantityById[action.id] = 1;
            } else {
                newState.quantityById[action.id]++;
            }
            
            return newState;
        case 'REMOVE_PRODUCT':
            if ( newState.quantityById[action.id] > 1 ) {
                newState.quantityById[action.id]--;
            } else {
                delete newState.quantityById[action.id];
            }
            return newState;
        default:
            return newState;
        // case 'CHECKOUT_REQUEST':
        // case 'CHECKOUT_SUCCESS':
        //     newState = initialState;
        // case 'CHECKOUT_FAILURE':
    }

}

export default cart;

export const quantity = (productId) => cart.quantityById[productId];