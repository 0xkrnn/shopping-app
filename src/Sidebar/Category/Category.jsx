import React from 'react';
import "./Category.css"

function Category() {
    return (
        <div>
            <div className='category-container'>
                <h4>CATEGORY</h4>
                <div>
                    <section>
                        <input type="radio" name='category' /> <span>All</span>
                    </section>
                    <section>
                        <input type="radio" name='category' /> <span>Men</span>
                    </section>
                    <section>
                        <input type="radio" name='category' /> <span>Women</span>
                    </section>
                    <section>
                        <input type="radio" name='category' /> <span>Kids</span>
                    </section>

                </div>
            </div>
        </div>
    );
}

export default Category;