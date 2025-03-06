// import withoutResults from "../mocks/no-results.json";

const ListOfMovies = ({ movies }) => {
  if (!movies) return;
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
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
