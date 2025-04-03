import { FilterContext } from "../context/filters";
import { useContext } from "react";



export const useFilters = () => {
  const context= useContext(FilterContext)

  
  return context;
};

