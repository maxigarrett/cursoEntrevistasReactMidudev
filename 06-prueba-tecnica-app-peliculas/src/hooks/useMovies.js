import { useState } from "react";
import { searchMovies } from "../services/movies";



export const useMovies = ({search}) => {
  const[movies,setMovies]=useState([]);

  const getMovies= async()=>{
    const newMoives=await searchMovies({search})
    setMovies(newMoives)
  }
  return {movies ,getMovies};
};