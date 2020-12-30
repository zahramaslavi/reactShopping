import Shop from '../api/Shop';

const addToCart = () => {
    //check if it exists in the inventory
       //we have to get the record of the product and check its inventory
    //add product to state added product by 
};

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

const safelyAddProductToCart = (productId) => ({
    type: 'ADD_PRODUCT',
    id: productId
})

export const addProductToCart = (productId) => (dispatch, getState) => {
    if (getState().products.byIds[productId].inventory > 0) {
        dispatch(safelyAddProductToCart(productId));
    }
}

export const removeProductFromCart = (productId) => ({
    type: 'REMOVE_PRODUCT',
    id: productId
})

const checkout = () => {
    //request checkout
    //send checkout
    //on failure just put back the cart data 
};