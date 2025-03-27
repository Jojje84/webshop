import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Cart from "./pages/Cart";
import ProductList from "./pages/ProductList"


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
  
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  )
}

export default App