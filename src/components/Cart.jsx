import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { cartContext } from '../Context/Context';
import Card from './Card';
import Sidebar from '../Sidebar/Sidebar';


function Cart() {

    const { cart } = useContext(cartContext);
    const [total, setTotal] = useState(0)

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.new_price), 0))
    }, [cart])

    return (
        <>
            <div className='nav'>
                <NavLink to="/">Home</NavLink>
                <h3>Total : {total}</h3>
            </div>
            <section className="side-pro">
                <Sidebar />
                {(cart.length === 0)
                    ? <div className='cart-empty'><h1>Cart is empty ":(" </h1> <NavLink to="/">Add items</NavLink> </div>
                    : <div className='card'>
                        {cart.map((prod) => {
                            return <Card product={prod} />
                        })}
                    </div>
                }
            </section>
        </>
    );
}

export default Cart;