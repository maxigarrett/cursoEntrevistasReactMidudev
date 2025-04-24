import { Link, NavLink } from "react-router-dom";

export const Menu = () => {
  return (
    <>
      <nav className="menu">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/otraPag">redireccionAbout</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/servicios">Servicios</Link>

        {/*ruta inexistente para el error*/}
        <Link to="/ajfdds">alkas</Link>
      </nav>

      {/* NAVLINK */}
      {/* se le puede dar css si cliqueamos al navlink con la funcion escrita en su className
      destructurar isActive y preguntarle si ya tiene la clase que creamos en el css, esa es la diferencia con la etiqueta <Link/> */}
      <nav className="menu">
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "")}
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          About
        </NavLink>
      </nav>
    </>
  );
};
