import "../index.css"
import { Route, Routes } from "react-router-dom"
import Cart from "./components/Cart"
import Home from "./components/Home"
import { useState } from "react"
import Context from "./Context/Context"


function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  )

}

export default App
