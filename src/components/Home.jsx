import React, { useState } from 'react';
import Navigation from "../Navigation/Navigation"
import Sidebar from "../Sidebar/Sidebar"
import Products from "../Products/Products"

function Home() {

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("")

    return (
        <div>
            <Navigation functionality={{ search, setSearch }} />
            <section className="side-pro">
                <Sidebar functionality={{ category, setCategory, price, setPrice }} />
                <Products functionality={{ search, category, price }} />
            </section>
        </div>
    );
}

export default Home;