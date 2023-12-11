import React from 'react';
import Price from './Price/Price';
import Category from './Category/Category';
import "./Sidebar.css"

function Sidebar({ functionality: { category, setCategory, price, setPrice } }) {
    return (
        <div className='sidebar'>
            <Price functionality={{ price, setPrice }} />
            <Category functionality={{ category, setCategory }} />
        </div>
    );
}

export default Sidebar;