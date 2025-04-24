import { Link, Outlet } from "react-router-dom";

export const Servicios = () => {
  return (
    <>
      <h1>servicios</h1>
      <nav className="menu">
        <Link to="/servicios">inicio</Link>
        <Link to="/servicios/lista/5">lista</Link>
        <Link to="/servicios/garantia">garantia</Link>
      </nav>
      {/* hace que muestre este contenido de algun hijo que tenga este componente que le pasemos en las Route en App */}
      <Outlet />
    </>
  );
};
