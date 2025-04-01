import "./Products.css";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";
import { useCart } from "../hooks/useCart";

export const Products = ({ products }) => {
  const { cart, addToCart, removeFromCart } = useCart();

  //chequea si un elemento del producto id concide con el del carrito
  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  if (!products) return;

  return (
    <>
      <main className="products">
        <ul>
          {products.slice(0, 10).map((product) => {
            const isProductInCart = checkProductInCart(product);
            const clasNameButtoCart = isProductInCart ? "deleteFromCart" : "";
            return (
              <li key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <div>
                  <strong>
                    {product.title} - ${product.price}
                  </strong>
                </div>
                <div>
                  <button
                    className={clasNameButtoCart}
                    onClick={() =>
                      isProductInCart
                        ? removeFromCart(product)
                        : addToCart(product)
                    }
                  >
                    {isProductInCart ? (
                      <RemoveFromCartIcon />
                    ) : (
                      <AddToCartIcon />
                    )}
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
};
