import Layout from "./Layout"
import Blogs from "./Blogs"
import Product from "./Product"
import Home from "./Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"

export default function App() {
  return (
    <div>
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="blogs" element={<Blogs />} />
         
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}
