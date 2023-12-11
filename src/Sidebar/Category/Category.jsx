import React from 'react';
import "./Category.css"

function Category({ functionality: { category, setCategory } }) {

    const categories = ["all", "men", "women", "kid"]

    const categoryList = categories.map((cat) => {
        return <section key={cat}>
            <input type="radio" name='category' value={cat} onChange={(e) => setCategory(e.target.value)} /> <span>{cat.toUpperCase()}</span>
        </section>
    })

    return (
        <div>
            <div className='category-container'>
                <h4>CATEGORY</h4>
                <div>
                    {categoryList}
                </div>
            </div>
        </div>
    );
}

export default Category;