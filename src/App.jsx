import "../index.css"
import { Route, Routes } from "react-router-dom"
import Cart from "./components/Cart"
import Home from "./components/Home"
import Dummy from "./components/Dummy"


function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/d" element={<Dummy />} />
    </Routes>
  )
}

export default App
