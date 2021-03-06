import Shop from '../api/Shop';

const receiveProducts = (products) => ({
    type: 'RECEIVE_PRODUCTS',
    products: products
});

export const getAllProducts = () => (dispatch) => {
    Shop.getProducts((products) => {
        dispatch(receiveProducts(products))
    })
    //send request 
    //on receive dispatch receiveProducts
};

const safelyAddProductToCart = (productId, quantity) => ({
    type: 'ADD_PRODUCT',
    payload: {id: productId, quantity: quantity}
})

export const addProductToCart = (productId, quantity) => (dispatch, getState) => {
    if (getState().products.byIds[productId].inventory >= quantity) {
        dispatch(safelyAddProductToCart(productId, quantity));
    }
}

const safelyRemoveProductFromCart = (productId, quantity) => ({
    type: 'REMOVE_PRODUCT',
    payload: {id: productId, quantity: quantity} 
})

export const removeProductFromCart = (productId, quantity) => (dispatch, getState) => {
    console.log("test", productId, quantity, getState().cart.quantityById[productId]);
    if ( getState().cart.quantityById[productId] >= quantity ) {
        dispatch(safelyRemoveProductFromCart(productId, quantity));
    }
}

export const checkout = () => (dispatch, getState) => {
    //this is just a dummy post orders - not real world
    let orders = getState().cart.quantityById.keys;

    dispatch({
        type: 'CHECKOUT_REQUEST'
    });

    Shop.buyProducts(orders, (orders) => {
        dispatch(checkoutSuccess());
    });

};

const checkoutSuccess = () => ({
    type: 'CHECKOUT_SUCCESS'
})
