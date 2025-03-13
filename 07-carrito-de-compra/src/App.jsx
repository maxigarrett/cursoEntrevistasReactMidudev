import { products as initialProducts } from "./moks/products.json";
import { Products } from "./components/Products";
import { useState } from "react";
import { Header } from "./components/Header";
import { useFilters } from "./hooks/useFilters";

function App() {
  const [products, setProducts] = useState(initialProducts);
  const { setFilters, filterProducts } = useFilters();
  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header changefilters={setFilters} />
      <Products products={filteredProducts} />
    </>
  );
}

export default App;
