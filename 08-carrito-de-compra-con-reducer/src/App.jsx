import { products as initialProducts } from "./moks/products.json";
import { Products } from "./components/Products";
import { useState } from "react";
import { Header } from "./components/Header";
import { useFilters } from "./hooks/useFilters";
import { Footer } from "./components/Footer";
import { Cart } from "./components/Cart";
import { CartProvider } from "./context/cart";

function App() {
  const [products, setProducts] = useState(initialProducts);
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(products);
  // console.log(setProducts);

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer />
    </CartProvider>
  );
}

export default App;
