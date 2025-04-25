import { Link } from "react-router-dom";

export const ServiciosLista = ({ servicios }) => {
  return (
    <>
      <h4>servicios</h4>
      <ul>
        {servicios.map((el) => (
          <li key={el.id}>
            {/* creamos ruta dinamica */}
            <Link to={`/servicios/${el.id}`}>{el.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
