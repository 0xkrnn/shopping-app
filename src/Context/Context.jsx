import React, { Children, useState } from 'react';

export const cartContext = React.createContext()


const Context = ({ children }) => {

    const [cart, setCart] = useState([])

    return (
        <cartContext.Provider value={{ cart, setCart }}>
            {children}
        </cartContext.Provider>
    );
};

export default Context;