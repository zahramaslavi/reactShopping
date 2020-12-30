import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';


export default function Navbar() {

    const [selected, setSelected] = useState('products');

    const handleClick = (link) => {
        setSelected(link);
    }

    return (
        <nav className="navbar">
            <Link to="/products" className={(selected === 'products') && 'selected'} onClick={() => handleClick('products')}>Products</Link>
            <Link to="/cart" className={(selected === 'cart') && 'selected'} onClick={() => handleClick('cart')}>Cart</Link>
        </nav>
    );
}