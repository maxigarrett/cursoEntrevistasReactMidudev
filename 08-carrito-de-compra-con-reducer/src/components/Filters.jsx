// import { useContext } from "react";
// import { FilterContext } from "../context/filters";
import { useFilters } from "../hooks/useFilters";
import "./Filters.css";
import { useId } from "react";

//podemos leer el contexto utilizando el usecontext o  utilizar el hook

export const Filters = () => {
  const { setFilters, filters } = useFilters();
  // const { filters, setFilters } = useContext(FilterContext);

  //le agrega un valor dependiendo de la posicion que tenga dentro de la componetizacion
  const minPriceFilterID = useId();
  const categoryFilterID = useId();

  const handleFilterPrice = (e) => {
    setFilters((preValue) => {
      return {
        ...preValue,
        minPrice: e.target.value,
      };
    });
  };
  const handleFilterCategory = (e) => {
    setFilters((preValue) => {
      return {
        ...preValue,
        category: e.target.value,
      };
    });
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterID}>price</label>
        <input
          type="range"
          id={minPriceFilterID}
          min="0"
          max="1000"
          onChange={handleFilterPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterID}>cateory</label>
        <select id={categoryFilterID} onChange={handleFilterCategory}>
          <option value="all">all</option>
          <option value="groceries">groceries</option>
          <option value="furniture">furniture</option>
          <option value="beauty">beauty</option>
          <option value="fragrances">fragrances</option>
        </select>
      </div>
    </section>
  );
};
