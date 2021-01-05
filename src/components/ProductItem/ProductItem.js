import React, { useState } from 'react';
import './ProductItem.scss';

import ProductWrapper from '../ProductWrapper/ProductWrapper';

export default function ProductItem(props) {

    const [quantity, setQuantity] = useState(1);

    const handleChangeQuantity = (quantity) => {
        setQuantity(quantity)
    }

    const addToCart = () => {
        props.handleAddToCart(props.product.id, quantity);
        setQuantity(1);
    }

    return (
        <ProductWrapper product={props.product}>
            <div className="buttons">
                <button 
                    onClick={() => addToCart()}
                    disabled={props.product.inventory < 1}
                >Add to cart</button>
                {' '}
                <input 
                    type="number" 
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => handleChangeQuantity(e.target.value)}
                    min="1"
                    max={Number(props.product.inventory)}
                />
            </div>
        </ProductWrapper>
    );

}