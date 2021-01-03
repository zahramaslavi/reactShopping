import React, { useState } from 'react';
import './ProductItem.scss'

export default function ProductItem(props) {

    const [quantity, setQuantity] = useState(1);

    const handleChangeQuantity = (quantity) => {
            setQuantity(quantity)
    }

    function inventory() {
        if ( props.showInventory ) {
            if (props.product.inventory > 0) 
                return <p>{props.product.inventory} available</p>;
            else 
                return <p>Sold out</p>;
        } 
    }

    return (
        <div className="productItem">

            <h5>{props.product.name}</h5>
            <h6> ${props.product.price}</h6>
            {inventory()}
            <img src={props.product.image} />
            <div className="buttons">
                <button onClick={() => props.handleAddToCart(props.product.id, quantity)} disabled={props.product.inventory < 1}>Add to cart</button>
                {' '}
                <input 
                    type="number" 
                    placeholder="Quantity"
                    value={quantity} onChange={(e) => handleChangeQuantity(e.target.value)}
                    min="1"
                    max={Number(props.product.inventory)}
                />
            </div>
        </div>
    );

}