const ListOfMovies = ({ movies }) => {
  if (!movies) return;
  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li key={movie.id} className="movie">
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} />
        </li>
      ))}
    </ul>
  );
};

const NoMoviesResults = () => {
  return <p>no movies</p>;
};

export const Movies = ({ movies }) => {
  const hasMovies = movies?.length > 0;
  return hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResults />;
};
