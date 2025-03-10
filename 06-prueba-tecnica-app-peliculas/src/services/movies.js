export const searchMovies= async ({search})=>{
    if(search==='') return null

    try {
        const res=await fetch(`https://www.omdbapi.com/?apikey=dfe97736&s=${search}`)
        const data= await res.json()
    

        const movies = data.Search;
        //mapeamos y cambiamos los valores de la api por nombres que nosotros  queremos para pasarle al compomente
        return movies?.map((movie) => {
          return {
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster,
          };
        });
    } catch (error) {
        throw new Error(`error searching movies:${error}`)
    }

}