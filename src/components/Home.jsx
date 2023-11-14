import React from 'react';
import Navigation from "../Navigation/Navigation"
import Sidebar from "../Sidebar/Sidebar"
import Products from "../Products/Products"

function Home() {
    return (
        <div>
            <Navigation />
            <section className="side-pro">
                <Sidebar />
                <Products />
            </section>
        </div>
    );
}

export default Home;