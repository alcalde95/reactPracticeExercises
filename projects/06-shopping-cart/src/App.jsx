import { useState } from "react"
import { Products } from "./components/Products"
import { products as initialProducts } from './mocks/products.json'
import { Header } from "./components/Header"
import { useContext } from "react"
import { FiltersContext } from "./context/filters"
import { useFilters } from "./hooks/useFilters"
import { Footer } from "./components/Footer"

function App() {

  const [products] = useState(initialProducts)
  
  const {filterProducts} = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
      <Footer></Footer>
    </>
  )
}

export default App
