import { useState } from "react";
import { createContext } from "react";
//1 crear el contexto es que se consume
export const FilterContext = createContext();

// 2- proveer el contexto, nos provee de acceso al contexto
export const FiltersProviders = ({ children }) => {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  return (
    <FilterContext.Provider
      value={{
        filters,
        setFilters,
        filterProducts,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
