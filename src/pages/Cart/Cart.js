import React, { Component } from 'react';
import './Cart.scss';

import { connect } from 'react-redux';

import { getCartProducts } from '../../reducers/index';
import { removeProductFromCart } from '../../actions/index';
// import { quantity } from '../../reducers/cart';

class Cart extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log("cart", this.props.addedProducts);
        return (
            <div className="cart">
                {this.props.addedProducts.map(item => (
                    <div key={item.id}>
                        <h4>{item.name}</h4>
                        <h5>{this.props.quantityById[item.id]}</h5>
                        <button onClick={() => this.props.removeProduct(item.id)}>Remove</button>
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    addedProducts: getCartProducts(state),
    quantityById: state.cart.quantityById
})

const mapDispatchToProps = dispatch => ({
    removeProduct: id => dispatch(removeProductFromCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);