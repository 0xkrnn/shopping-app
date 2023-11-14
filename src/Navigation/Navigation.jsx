import React from 'react';
import "./Nav.css"
import "../../index.css"
import { NavLink } from 'react-router-dom';
import cart from "../assets/cart_icon.png"

function Navigation() {
    return (
        <div className='nav'>
            <input type="text" placeholder='search here' className='searchbar' />
            <NavLink to="/cart"> <img src={cart} alt="cart-logo" className='cart-logo' /></NavLink>
        </div>
    );
}

export default Navigation;