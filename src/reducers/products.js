
const initialState = {
    byIds: {},
};

const products = (state = initialState, action) => {

    const newState = {...state};

    switch(action.type) {
        case 'RECEIVE_PRODUCTS':
            console.log(action);
            return {
                ...newState, 
                byIds: {
                    ...action.products.reduce((obj, product) => {
                        obj[product.id] = product;
                        return obj;
                    }, {})
                }
            } 
        case 'ADD_PRODUCT':
            newState.byIds[action.id].inventory --;

            return newState;
        case 'REMOVE_PRODUCT':
            newState.byIds[action.id].inventory ++;

            return newState;
        default: 
            return newState;

    }

}

export default products;

export const getProduct = (id, state) => {
    console.log('id', id, state.products.byIds[id])
    return state.products.byIds[id];
}