import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Products.scss';
import ProductItem from '../../components/ProductItem/ProductItem';

import { addProductToCart } from '../../actions/index';

class Products extends Component {

    constructor(props) {
        super(props);   
    }

    render() {
        console.log("comp", this.props.products);
        return (
            <div className="products">
                {
                    Object.keys(this.props.products).map(key => (
                        <div key={key} className="product">
                            <ProductItem product={this.props.products[key]} showInventory="true"/>
                            <button onClick={() => this.props.addToCart(key)} disabled={this.props.products[key].inventory < 1}>Add to cart</button>
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
    addToCart: productId => dispatch(addProductToCart(productId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Products)