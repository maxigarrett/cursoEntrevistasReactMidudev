import "./Cart.css";
import { useId } from "react";
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./Icons";
import { useCart } from "../hooks/useCart";

const ItemCart = ({
  thumbnail,
  price,
  title,
  quantity,
  description,
  addToCart,
}) => {
  return (
    <li>
      <img src={thumbnail} alt={description} />
      <div>
        <strong>{title}</strong>-${price}
      </div>

      <footer>
        <small>Qty: {quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  );
};
export const Cart = () => {
  const cartCheckBoxId = useId();
  const { cart, clearCart, addToCart } = useCart();

  return (
    <div>
      <label className="cart-button" htmlFor={cartCheckBoxId}>
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckBoxId} hidden />

      <aside className="cart">
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
        <ul>
          {cart.map((product) => {
            return (
              <ItemCart
                key={product.id}
                addToCart={() => addToCart(product)}
                {...product}
              />
            );
          })}
        </ul>
      </aside>
    </div>
  );
};
