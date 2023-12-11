import React, { useState } from 'react';
import all_product from '../assets/all_product';

const Dummy = () => {

    const data = all_product

    const [search, setSearch] = useState("");

    return (
        <div>
            <input type="text" onChange={(e) => setSearch(e.target.value)} />

            {
                data.filter((item) => {
                    return search.toLowerCase() === ""
                    ? item
                    : item.name.toLowerCase().includes(search)
                })
                .map((item) => {
                    return <h1>{item.name}</h1>
                })
            }

        </div>
    );
};

export default Dummy;