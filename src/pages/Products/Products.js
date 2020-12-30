import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Products.scss';

import { addProductToCart } from '../../actions/index';

class Products extends Component {

    constructor(props) {
        super(props);   
    }

    render() {
        return (
            <div className="products">
                {
                    Object.keys(this.props.products).map(key => (
                        <div key={key}>
                            <h3>{this.props.products[key].name}</h3>
                            <button onClick={() => this.props.addToCart(key)}>Add to cart</button>
                        </div>
                    ))
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products.byIds
});

const mapDispatchToProps = dispatch => ({
    addToCart: productId => dispatch(addProductToCart(productId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Products)