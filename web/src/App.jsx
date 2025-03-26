import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Products from "./pages/Products";
import Cart from "./pages/Cart";
import CategoryList from "./pages/CategoryList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/categories" element={<CategoryList />} />
      </Routes>
    </Router>
  )
}

export default App