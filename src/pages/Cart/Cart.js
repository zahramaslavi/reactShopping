import React, { Component, Fragment } from 'react';
import './Cart.scss';
import ProductItem from '../../components/ProductItem/ProductItem';
import OrderItem from '../../components/OrderItem/OrderItem';
import { connect } from 'react-redux';

import { getCartProducts, getTotal } from '../../reducers/index';
import { removeProductFromCart, checkout } from '../../actions/index';


class Cart extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log("cart", this.props.addedProducts);
        return (
            <div className="cart">
                {this.props.addedProducts.map(item => (
                    <div key={item.id} className="product">
                
                        <OrderItem 
                            product={item} 
                            quantityAdded={this.props.quantityById[item.id]}
                            handleRemoveProduct={(quantity) => this.props.removeProduct(item.id, quantity)}
                        />
                        <hr />
                    </div>
                ))}
                {(this.props.total > 0) ?
                    <Fragment>
                        <h3>Total: ${this.props.total}</h3>
                        <button onClick={() => this.props.checkout()}>Checkout</button>
                        {this.props.requesting && <h5>Requesting</h5>}
                    </Fragment> :
                    <h3>No item in your cart</h3>
                }
                
            </div>
        );
    }
}

const mapStateToProps = state => ({
    addedProducts: getCartProducts(state),
    quantityById: state.cart.quantityById,
    total: getTotal(state),
    requesting: state.cart.requesting
})

const mapDispatchToProps = dispatch => ({
    removeProduct: (id, quantity) => dispatch(removeProductFromCart(id, quantity)),
    checkout: () => dispatch(checkout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);