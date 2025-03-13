import { useState, useId } from "react";
import "./Filters.css";
export const Filters = ({ changefilters }) => {
  const [minPrice, setMinprice] = useState();

  //le agrega un valor dependiendo de la posicion que tenga dentro de la componetizacion
  const minPriceFilterID = useId();
  const categoryFilterID = useId();

  const handleFilterPrice = (e) => {
    setMinprice(e.target.value);
    changefilters((preValue) => {
      return {
        ...preValue,
        minPrice: e.target.value,
      };
    });
  };
  const handleFilterCategory = (e) => {
    changefilters((preValue) => {
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
        />
        <span>${minPrice}</span>
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
