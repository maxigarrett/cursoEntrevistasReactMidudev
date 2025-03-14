// import { useCart } from "../hooks/useCart";
import { FilterContext } from "../context/filters";
import "./Footer.css";
import { useContext } from "react";

export const Footer = () => {
  //aca en ves de utilizar el hook  useFilters llamamos al mimso contexto
  const { filters } = useContext(FilterContext);

  //USAMOS EL HOOK PARA VER EL VALOR DE CART PEROPODRIAMOS USAR ELMISMO CONTEXT TAMBIEN
  // const { cart } = useCart();
  return (
    <>
      <footer className="footer">
        {JSON.stringify(filters)}
        {/* {JSON.stringify(cart)} */}
      </footer>
    </>
  );
};
