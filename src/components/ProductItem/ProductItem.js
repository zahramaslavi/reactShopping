import React from 'react';
import './ProductItem.scss'

export default function ProductItem(props) {

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
        </div>
    );

}