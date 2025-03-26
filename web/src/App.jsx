import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Cart from "./pages/Cart";
import CategorySection from './components/CategorySection'
import Products from "./components/Products"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategorySection />} />
        <Route path="/products/:categoryName" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  )
}

export default App