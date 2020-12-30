import React, { Component, Fragment } from 'react';
import './Cart.scss';
import ProductItem from '../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';

import { getCartProducts, getTotal } from '../../reducers/index';
import { removeProductFromCart } from '../../actions/index';


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
                        <ProductItem product={item} />
                        <span>{this.props.quantityById[item.id]} added </span>
                        <button onClick={() => this.props.removeProduct(item.id)}>Remove</button>
                        <hr />
                    </div>
                ))}
                {(this.props.total > 0) ?
                    <Fragment>
                        <h3>Total: ${this.props.total}</h3>
                        <button>Checkout</button>
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
    total: getTotal(state)
})

const mapDispatchToProps = dispatch => ({
    removeProduct: id => dispatch(removeProductFromCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);