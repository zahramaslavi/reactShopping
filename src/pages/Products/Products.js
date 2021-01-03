import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import './Products.scss';
import ProductItem from '../../components/ProductItem/ProductItem';

import { addProductToCart } from '../../actions/index';
import { quantity } from '../../reducers/cart';

class Products extends Component {

    constructor(props) {
        super(props);  
        
        this.state = {
            quantity: 1
        };
    }

    render() {
        console.log("comp", this.props.products);
        return (
            <div className="products">
                {
                    Object.keys(this.props.products).map(key => (
                        <div key={key} className="product">
                            <ProductItem product={this.props.products[key]} showInventory="true" handleAddToCart={(id, quantity) => this.props.addToCart(id, quantity)}/>
                            <hr />
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
    addToCart: (productId, quantity) => dispatch(addProductToCart(productId, quantity))
})

export default connect(mapStateToProps, mapDispatchToProps)(Products)