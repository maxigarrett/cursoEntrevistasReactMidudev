import { useParams, useNavigate, Link } from "react-router-dom";

export const ServiciosDetalles = ({ servicios }) => {
  //USEPARAMS
  const { id } = useParams();

  const getProducts = (id) => {
    return servicios.find((el) => el.id.toString() === id); //todo elproduct
  };
  const productDetaild = getProducts(id);

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <section>
        <h1>Productos Detalles</h1>
        <h2>detalles productos:</h2>
        <p>Name: {productDetaild.name}</p>
        <p>ID: {productDetaild.id}</p>
        <p>PRICE: ${productDetaild.price}</p>
        <button onClick={handleGoBack}>Regresar</button>
      </section>
    </>
  );
};
