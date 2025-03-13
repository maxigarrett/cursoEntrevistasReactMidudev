import "./Products.css";
import { AddToCartIcon } from "./Icons";

export const Products = ({ products }) => {
  if (!products) return;
  return (
    <>
      <main className="products">
        <ul>
          {products.slice(0, 10).map((product) => (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>
                  {product.title} - ${product.price}
                </strong>
              </div>
              <div>
                <button>
                  <AddToCartIcon />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};
