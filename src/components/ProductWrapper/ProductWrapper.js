import React from 'react';

function ProductWrapper(props) {

    function inventory() {
        if (props.product.inventory > 0) 
            return <p>{props.product.inventory} available</p>;
        else 
            return <p>Sold out</p>;
    }

    return(
        <div className="productItem">

            <h5>{props.product.name}</h5>
            <h6> ${props.product.price}</h6>
            {inventory()}
            <img src={props.product.image} />
            {props.children}
        </div>
    );
}

export default ProductWrapper;