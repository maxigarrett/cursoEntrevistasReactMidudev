import "./Cart.css";
import { useId } from "react";
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./Icons";
import { useCart } from "../hooks/useCart";
export const Cart = () => {
  const cartCheckBoxId = useId();
  const { cart } = useCart();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckBoxId}>
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckBoxId} hidden />

      <aside className="cart">
        <ul>
          {cart.map((item) => {
            return (
              <li>
                <img src={item.thumbnail} alt={item.description} />
                <div>
                  <strong>{item.category}</strong>-${item.price}
                </div>

                <footer>
                  <small>Qty: {item.quantity}</small>
                  <button>+</button>
                </footer>
              </li>
            );
          })}
        </ul>
        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
};
