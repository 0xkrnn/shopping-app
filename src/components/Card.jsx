import React, { useContext, useEffect } from 'react';
import { cartContext } from '../Context/Context';


function Card({ product }) {

    const { cart, setCart } = useContext(cartContext);

    const handleDelete = (id) => {
        let filteredCart = cart.filter((item) => {
            return item.id !== id
        });
        setCart(filteredCart)
    };


    return (
        <>
            <div className='card-container'>
                <section >
                    <img src={product.image} className='card-img' alt={product.name} />
                </section>
                <section className='card-details'>
                    <h6 className='product-name'>{product.name}</h6>
                    <h5 className='product-price'><del>Rs.{product.old_price}</del>Rs. {product.new_price} </h5>

                    {(cart.includes(product)
                        ? <button className='cart-btn' onClick={() => handleDelete(product.id)}>Remove from cart</button>
                        : <button className='cart-btn' onClick={() => setCart([...cart, product])}>Add to cart</button>
                    )}

                </section>
            </div>
        </>


    );
}

export default Card;