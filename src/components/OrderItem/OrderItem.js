import React, { useState } from 'react';
import './OrderItem.scss';

import ProductWrapper from '../ProductWrapper/ProductWrapper';

export default function OrderItem(props) {

    const [quantity, setQuantity] = useState(1);

    const removeFromCart = () => {
        props.handleRemoveProduct(quantity);
        setQuantity(1);
    }

    return (
        <ProductWrapper product={props.product}>
            <div className="buttons">
                <span>{props.quantityAdded} added </span>
                <button onClick={() => removeFromCart()}>Remove</button>
                {' '}
                <input 
                    type="number" 
                    placeholder="Quantity"
                    value={quantity} 
                    onChange={(e) => setQuantity(e.target.value)}
                    min="1"
                    max={props.quantityAdded}
                />
            </div>
            
        </ProductWrapper>
    );

}