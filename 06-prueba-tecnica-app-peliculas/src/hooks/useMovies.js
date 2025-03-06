import responseMovies from "../mocks/with-results.json";

export const useMovies = () => {
    const movies = responseMovies.Search;
    //mapeamos y cambiamos los valores de la api por nombres que nosotros  queremos para pasarle al compomente
    const mappedMovies = movies?.map((movie) => {
      return {
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster,
      };
    });
  
    return { movies, mappedMovies };
  };