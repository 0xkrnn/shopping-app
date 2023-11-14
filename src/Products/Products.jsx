import React from 'react';
import "./Products.css"
import "../../index.css"
import Card from '../components/Card';
import all_product from '../assets/all_product';


function Products() {
    return (
        <>
            <div className='card'>
                {all_product.map((prod) => {
                    return <Card product={prod} name="karan"/>
                })}
            </div>
        </>
    );
}

export default Products;