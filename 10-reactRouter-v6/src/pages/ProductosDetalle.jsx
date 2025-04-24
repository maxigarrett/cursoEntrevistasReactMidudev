import { useParams, useNavigate, Link } from "react-router-dom";

export const ProductosDetalles = ({ productos }) => {
  //USEPARAMS
  // capturamoe el parametro de ID de ruta dinamica
  //y destructuramos el nombre del parametros que le pasamos por <Route/> en la APP como string path="/productos/:id"
  //captura ese valor el que le pasamos por el route principal como parametro
  const { id } = useParams();

  const getProducts = (id) => {
    return productos.find((el) => el.id.toString() === id); //todo elproduct
  };
  const productDetaild = getProducts(id);

  //USENAVIGATE
  //retroceder o adelantar segun el historial de navegacion
  const navigate = useNavigate();
  const handleGoBack = () => {
    //-1  ->   pagina anterior
    //0  ->   pagina actual
    //1  ->   pagina siguiente
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
        {/* podemos regresar de cualquiera de las dos formas para regresar */}
        <button onClick={handleGoBack}>Regresar</button>
        <Link to="/productos">regresar</Link>
      </section>
    </>
  );
};
