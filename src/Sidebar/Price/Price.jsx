import React from 'react';
import "./Price.css"

function Price({ functionality: { price, setPrice } }) {


    const prices = ["All","100", "200", "300", "400"]

    let i = 1

    const priceRange = prices.map((priceValue) => {
        return <section key={i++}>
            <input type="radio" name='price' value={priceValue} onChange={(e) => setPrice(e.target.value)} /> <span> {priceValue} </span>
        </section>
    })


    return (
        <div className='price-container'>
            <h4>PRICE</h4>
            <div>

                {priceRange}

            </div>
        </div>
    );
}

export default Price;