import { useRef, useState ,useMemo,useCallback} from "react";
import { searchMovies } from "../services/movies";
  //USEMEMO si buscamosuna pelicula y ordenamos por anio y borramos en el buscador no queremosque se renderice
  //de nuevo el sorted o movies porque no estamos haciendo nada mas que cambiar el valor del search
  //pero si le damos a buscar o ordenar es normal que se ejecute.

  //usecallback es lo mismo que useMemo pero solo que esta pensado para funciones y nos ahorramos la funcion anonima que va dentro
  //y es mas legible y se la pnemos a la fuuncion getmovies para evitar que se renderice que le damos a buscar o cliqueamos en el checkbox
  //solo se renderiza cuando escribimos en el  input
  //si le pasamos al usecallback el search al getMoives y no al customhook en general optimizaremos mas ya que no se rendizara mientras 
  //escribamos tampoco y necesitamos sacarle la dependecia de abajo y dejarla vacia ya q no la necesitamos solo queremos que
  //se renderize una vez y ya
export const useMovies = ({sort}) => {
  const[movies,setMovies]=useState([]);
  const[loading,setLoading]=useState(false);
  const[error,setError]=useState(null);
  const previusSearch=useRef('');

  const getMovies= useCallback(
    async({search})=>{
      //evitar la misma busqueda
      if(search=== previusSearch.current) return
      try {
        setLoading(true)
        previusSearch.current=search
        const newMoives=await searchMovies({search})
        setMovies(newMoives)
      } catch (error) {
        setError(error.message)
      }finally{
        setLoading(false)
      }
    },[])




  //si el ceckbox esta en true ordena por titulos o por año
  // const sortedMovies= sort ? [...movies].sort((a,b)=>a.title.localeCompare(b.title)):movies
  const sortedMovies =useMemo(()=>{
    return sort 
    ? [...movies].sort((a,b)=>a.year - b.year)
    :movies
  },[sort,movies])

  return {movies: sortedMovies ,getMovies,loading,error};
};