import React, { useState } from 'react';
import './ProductItem.scss'

export default function OrderItem(props) {

    return (
        <div className="orderItem">

            <h5>{props.product.name}</h5>
            <h6> ${props.product.price}</h6>
            {inventory()}
            <img src={props.product.image} />
            {/* <div className="buttons">
                <button onClick={() => props.handleRemoveFromCart(props.product.id, quantity)} disabled={props.product.inventory < 1}>Remove</button>
                {' '}
                <input 
                    type="number" 
                    placeholder="Quantity"
                    value={quantity} onChange={(e) => handleChangeQuantity(e.target.value)}
                    min="1"
                    max={Number(props.product.inventory)}
                />
            </div> */}
        </div>
    );

}