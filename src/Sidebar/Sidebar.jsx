import React from 'react';
import Price from './Price/Price';
import Category from './Category/Category';
import "./Sidebar.css"

function Sidebar() {
    return (
        <div className='sidebar'>
            <Price />
            <Category />
        </div>
    );
}

export default Sidebar;