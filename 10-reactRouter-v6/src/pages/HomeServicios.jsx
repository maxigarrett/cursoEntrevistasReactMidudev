import { Link } from "react-router-dom";

export const HomeServicios = () => {
  return (
    <>
      <h4>Home se servicios</h4>
      {/* esta redirige a la siguinte ruta hija que tenmos en la Route en la APP */}
      <Link to="/servicios/garantia"> link a garantia</Link>
    </>
  );
};
