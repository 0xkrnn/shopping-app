import React from 'react';
import "./Products.css"
import "../../index.css"
import Card from '../components/Card';
import all_product from '../assets/all_product';


function Products({ functionality: { search, price, category } }) {

    return (
        <>
            <div className='card'>
                {all_product
                    .filter((prod) => {
                        return search.toLowerCase().length === ""
                            ? prod
                            : prod.name.toLowerCase().includes(search.toLowerCase())
                    })

                    .filter((prod) => {
                        return price == "" || price.toLowerCase() == "all"
                            ? prod
                            : Math.floor(Number(prod.new_price)) < Number(price)
                    })

                    .filter((prod) => {
                        return category.toLowerCase() == "all" || category == ""
                            ? prod
                            : prod.category.toLowerCase() == category
                    })

                    .map((prod) => {
                        return <Card product={prod} key={prod.id} />
                    })
                }
            </div>
        </>
    );
}

export default Products;