import React from 'react';
import "./Price.css"

function Price() {
    return (
        <div className='price-container'>
            <h4>PRICE</h4>
            <div>
                <section>
                    <input type="radio" name='price'  /> <span>All</span>
                </section>
                <section>
                    <input type="radio" name='price' /> <span>100</span>
                </section>
                <section>
                    <input type="radio" name='price' /> <span>200</span>
                </section>
                <section>
                    <input type="radio" name='price' /> <span>300</span>
                </section>
                <section>
                    <input type="radio" name='price' /> <span>400</span>
                </section>
            </div>
        </div>
    );
}

export default Price;