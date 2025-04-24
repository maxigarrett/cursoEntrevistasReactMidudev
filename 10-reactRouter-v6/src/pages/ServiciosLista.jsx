import { useParams } from "react-router-dom";

export const ServiciosLista = () => {
  const { pepe } = useParams();
  console.log(pepe); //pepe viene de Route, el valor 5 viene del Link dentro de Servicios
  return (
    <>
      <h4>servicios</h4>
      <ul>
        <li>servicios 1</li>
        <li>servicios 2</li>
        <li>servicios 3</li>
      </ul>
    </>
  );
};
