import { Link } from "react-router-dom";

export const Productos = ({ productos }) => {
  return (
    <>
      <section>
        <h1>Productos</h1>
        <ul>
          {productos.map((el) => (
            <li key={el.id}>
              {/* creamos ruta dinamica */}
              <Link to={`/productos/${el.id}`}>{el.name}</Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
